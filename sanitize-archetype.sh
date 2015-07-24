#!/bin/sh

set -e

# TODO Update the version!
ARCHETYPE_VERSION='1.7.0'

BASE_PATH='/Users/limc/Documents/development/workspace/intellij/websphere-archetype-hcpr/target/generated-sources/archetype'
ARCHETYPE_RESOURCES_PATH="${BASE_PATH}/src/main/resources/archetype-resources"

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
    echo "Files that contain '${searchString}'. ( Hits expected: ${expectedCount} ):-"
    find "${path}" -type f -exec grep -e "${searchString}" {} \; -print
}


currentPath="${BASE_PATH}/pom.xml"
replace_string_in_file "${currentPath}" '<artifactId>webspherearchetype-archetype</artifactId>' '<artifactId>websphere-archetype-hcpr</artifactId>'
replace_string_in_file "${currentPath}" '<name>webspherearchetype-archetype</name>' '<name>websphere-archetype-hcpr</name>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-ear/pom.xml"
replace_string_in_file "${currentPath}" '<groupId>edu.mayo.commons.archetypes</groupId>' '<groupId>${package}</groupId>'
replace_string_in_file "${currentPath}" '<artifactId>webspherearchetype-war</artifactId>' '<artifactId>${rootArtifactId}-war</artifactId>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-war/src/main/webapp/WEB-INF/jsp/view/home.jsp"
replace_string_in_file "${currentPath}" '${package}:websphere-archetype-hcpr:${version}' "edu.mayo.commons.archetypes:websphere-archetype-hcpr:${ARCHETYPE_VERSION}"
replace_string_in_file "${currentPath}" 'websphere-archetype-hcpr/${version}' "websphere-archetype-hcpr/${ARCHETYPE_VERSION}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-ear/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-war/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

display_line
echo "${ARCHETYPE_RESOURCES_PATH}"
echo "- Delete .idea/ dir."
echo "- Delete README-ARCHETYPE.md and sanitize-archetype.sh."
echo "- Delete *.iml files."

rm -rf "${ARCHETYPE_RESOURCES_PATH}/.idea"
rm -rf "${ARCHETYPE_RESOURCES_PATH}/README-ARCHETYPE.md"
rm -rf "${ARCHETYPE_RESOURCES_PATH}/sanitize-archetype.sh"
find "${ARCHETYPE_RESOURCES_PATH}" -name "*.iml" -delete

find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 4 '\${version}'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'webspherearchetype'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 1 'archetypes'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 1 'edu.mayo.commons.archetypes'


display_line
echo 'Done'