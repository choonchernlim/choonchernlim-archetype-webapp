#!/bin/sh

# Generates archetype from project, sanitize it, remove existing version from local repo, install it in local repo

set -e

# Get archetype version from `archetype/archetype.properties`
ARCHETYPE_VERSION=`awk -F= '/^archetype.version/ { print $2 }' archetype/archetype.properties`

ARCHETYPE_RESOURCES_PATH="`pwd`/target/generated-sources/archetype/src/main/resources/archetype-resources"

LOCAL_ARCHETYPE_PATH="$HOME/.m2/repository/com/github/choonchernlim/choonchernlim-archetype-webapp/$ARCHETYPE_VERSION/"

# Asserts that the file path exists
# $1 = file path
assertFileExist() {
    local path=$1

    if [ ! -f ${path} ]
    then
        echo "CheckFileExistException: Path is not a file: ${path}"
        exit 1
    fi
}

# Asserts that the variable value is not blank.
# $1 = variable name
# $2 = value
assertNotBlank() {
    local varName=$1
    local value=$2

    if [ -z "${value}" ]
    then
        echo "CheckNotBlankException: ${varName} cannot be blank."
        exit 1
    fi
}

# Displays the count of given string pattern
# $1 = file path
# $2 = search string
countStringMatched() {
    local path=$1
    local searchString=$2
    local count=`grep -c "${searchString}" ${path}`

    echo "${count} : ${searchString}"
}


# Draws a line
display_line() {
    echo "------------------------------------------------------------"
}

# Replaces a string in a file.
# $1 = file path
# $2 = replacing this string...
# $3 = ... with this string
replace_string_in_file() {
    local path=$1
    local fromString=$2
    local toString=$3

    assertNotBlank 'path' "${path}"
    assertNotBlank 'fromString' "${fromString}"
    assertNotBlank 'toString' "${toString}"

    assertFileExist "${path}"

    display_line
    echo "File    : ${path}"
    echo "   From : ${fromString}"
    echo "   To   : ${toString}"
    echo " "
    echo "BEFORE:"

    countStringMatched "${path}" "${fromString}"
    countStringMatched "${path}" "${toString}"

    # Mac requires extension to be set, so an empty string is used.
    # Using | as delimiter instead of default / to prevent escaping special characters
    # http://backreference.org/2010/02/20/using-different-delimiters-in-sed/
    sed -i '' "s|${fromString}|${toString}|g" "${path}"

    echo " "
    echo "AFTER:"

    countStringMatched "${path}" "${fromString}"
    countStringMatched "${path}" "${toString}"

    echo " "
}

# Inserts the following Velocity's escape variables on top of the file:-
# - #set( $symbol_pound = '#' )
# - #set( $symbol_dollar = '$' )
# - #set( $symbol_escape = '\' )
insert_velocity_escape_variables_in_file() {
    local path=$1

    sed -i '' "1i\\
    #set( \$symbol_pound = '\#' )\\
    #set( \$symbol_dollar = '\$' )\\
    #set( \$symbol_escape = '\\\\' )\\
    " "${path}"
}

# Finds string occurence and prints them on console
# $1 = path
# $2 = expected count
# $3 = search string
find_string_occurence() {
    local path=$1
    local expectedCount=$2
    local searchString=$3

    display_line
    echo "Files that contain '${searchString}'. ( Should have ${expectedCount} ):-"
    find "${path}" -type f -exec grep -e "${searchString}" {} \; -print
}

# Note: JaCoCo has to be disabled to prevent this exception:-
#
#    [ERROR] Failed to execute goal on project choonchernlim-archetype-webapp-webapp-ear: Could not resolve
#    dependencies for project com.github.choonchernlim:choonchernlim-archetype-webapp-webapp-ear:ear:0.0.0:
#    Could not find artifact com.github.choonchernlim:choonchernlim-archetype-webapp-webapp-war:war:0.0.0
#    in central (https://repo.maven.apache.org/maven2) -> [Help 1]

echo "Creating Maven archetype from project"
mvn clean archetype:create-from-project -Pdisable-jacoco -Darchetype.properties=archetype/archetype.properties
display_line

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-ear/pom.xml"
replace_string_in_file "${currentPath}" '<groupId>com.github.choonchernlim</groupId>' '<groupId>${package}</groupId>'
replace_string_in_file "${currentPath}" '<artifactId>choonchernlim-archetype-webapp-webapp-war</artifactId>' '<artifactId>${rootArtifactId}-webapp-war</artifactId>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-ear/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

display_line
echo "${ARCHETYPE_RESOURCES_PATH}"
echo "- Delete dirs: .idea/, archetype/"
echo "- Delete files: .gitignore, LICENSE, *.iml"

rm -rf "${ARCHETYPE_RESOURCES_PATH}/.idea"
rm -rf "${ARCHETYPE_RESOURCES_PATH}/archetype"
rm -rf "${ARCHETYPE_RESOURCES_PATH}/.gitignore"
rm -rf "${ARCHETYPE_RESOURCES_PATH}/LICENSE"
find "${ARCHETYPE_RESOURCES_PATH}" -name "*.iml" -delete

find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 4 '\${version}'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 1 'choonchernlim-archetype-webapp'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'archetypes'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'com.github.choonchernlim.choonchernlimArchetypeWebapp'
display_line

echo "Remove existing archetype from local repository..."
rm -rf "$LOCAL_ARCHETYPE_PATH"
display_line

echo "Installing new archetype in local repository..."
(cd target/generated-sources/archetype; mvn clean install)

display_line
echo 'Done'


