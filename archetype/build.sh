#!/usr/bin/env bash

#---------------------------------------------------------------------------
# build.sh
#
# Generates archetype from project, sanitize it, remove existing version
# from local repo, install it in local repo.
#---------------------------------------------------------------------------

set -e

# Must run script with Java 6 to prevent weird errors
export JAVA_HOME=$(/usr/libexec/java_home -v 1.6)

# Get archetype version from `archetype/archetype.properties`
ARCHETYPE_VERSION=`awk -F= '/^archetype.version/ { print $2 }' archetype/archetype.properties`

# Sanitized archetype copy
TMP_PATH="/tmp/choonchernlim-archetype-webapp"

ARCHETYPE_BASE_PATH="${TMP_PATH}/target/generated-sources/archetype"
ARCHETYPE_RESOURCES_PATH="$ARCHETYPE_BASE_PATH/src/main/resources/archetype-resources"

# ~/.m2 path for previously installed archetype
ARCHETYPE_LOCAL_REPO_PATH="$HOME/.m2/repository/com/github/choonchernlim/choonchernlim-archetype-webapp/$ARCHETYPE_VERSION/"

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

# Remove all `target` dirs first, if any
mvn clean

# Recreate temp space
rm -rf ${TMP_PATH}
mkdir ${TMP_PATH}

# Remove all unneeded files for the archetype. `archetype/` dir cannot be removed at this point because
# `mvn archetype:create-from-project` needs a property file that resides in it.
rsync . ${TMP_PATH} -av \
--exclude="*.iml" \
--exclude="LICENSE" \
--exclude=".git/" \
--exclude=".idea/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/etc/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/node/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/node_modules/"

# Change dir to the temp space
cd ${TMP_PATH}

# Create archetype from existing project. Enforcer Plugin and JaCoCo plugin have to be disabled to prevent this exception:-
#
#    [ERROR] Failed to execute goal on project choonchernlim-archetype-webapp-webapp-ear: Could not resolve
#    dependencies for project com.github.choonchernlim:choonchernlim-archetype-webapp-webapp-ear:ear:0.0.0:
#    Could not find artifact com.github.choonchernlim:choonchernlim-archetype-webapp-webapp-war:war:0.0.0
#    in central (https://repo.maven.apache.org/maven2) -> [Help 1]
echo "Creating Maven archetype from existing project..."
mvn clean archetype:create-from-project -Darchetype.properties=archetype/archetype.properties -Denforcer.skip=true -Pno-jacoco
display_line

# Now, it is safe to get rid of `archetype` dirs
rm -rf ${TMP_PATH}/archetype
rm -rf ${ARCHETYPE_RESOURCES_PATH}/archetype

# Pluck out `<parent>...</parent>` from `pom.xml` and replace all line breaks with blank string to prevent `sed`
# from throwing "unescaped newline inside substitute pattern" error. Then, use xmllint to reformat the file back.
echo "Adding parent pom to archetype pom..."
PARENT_POM=`awk '/<parent>/,/<\/parent>/' pom.xml | tr '\n' ' '`
sed -i '' "s|</modelVersion>|</modelVersion> ${PARENT_POM}|g" "$ARCHETYPE_BASE_PATH/pom.xml"
export XMLLINT_INDENT="    "
xmllint --output "$ARCHETYPE_BASE_PATH/pom.xml" --format "$ARCHETYPE_BASE_PATH/pom.xml"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-ear/pom.xml"
replace_string_in_file "${currentPath}" '<groupId>com.github.choonchernlim</groupId>' '<groupId>${package}</groupId>'
replace_string_in_file "${currentPath}" '<artifactId>choonchernlim-archetype-webapp-webapp-war</artifactId>' '<artifactId>${rootArtifactId}-webapp-war</artifactId>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/frontend/package.json"
replace_string_in_file "${currentPath}" '"name": "choonchernlim-archetype-webapp"' '"name": "${rootArtifactId}"'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/frontend/gulp/config.js"
replace_string_in_file "${currentPath}" 'localhost:7777/choonchernlim-archetype-webapp-webapp' 'localhost:7777/${rootArtifactId}'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/webapp/WEB-INF/web.xml"
replace_string_in_file "${currentPath}" '<display-name>choonchernlim-archetype-webapp</display-name>' '<display-name>${rootArtifactId}</display-name>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/webapp/WEB-INF/jsp/index.jsp"
replace_string_in_file "${currentPath}" '<title>choonchernlim-archetype-webapp</title>' '<title>${rootArtifactId}</title>'
replace_string_in_file "${currentPath}" '<a class="navbar-brand" href="${symbol_pound}">choonchernlim-archetype-webapp</a>' '<a class="navbar-brand" href="${symbol_pound}">${rootArtifactId}</a>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/README.md"
replace_string_in_file "${currentPath}" '# choonchernlim-archetype-webapp' '# ${rootArtifactId}'

currentPath="${ARCHETYPE_RESOURCES_PATH}/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-ear/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/pom.xml"
replace_string_in_file "${currentPath}" '#' '$symbol_pound'
insert_velocity_escape_variables_in_file "${currentPath}"

find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 5 '\${version}'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 2 'choonchernlim-archetype-webapp'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'archetypes'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'com.github.choonchernlim.choonchernlimArchetypeWebapp'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'choonchernlimArchetypeWebapp'
display_line

#echo "Remove existing archetype from local repository..."
#rm -rf "$ARCHETYPE_LOCAL_REPO_PATH"
#display_line
#
#echo "Installing new archetype in local repository..."
#(cd target/generated-sources/archetype; mvn clean install)
#
#display_line
#echo 'Done'
