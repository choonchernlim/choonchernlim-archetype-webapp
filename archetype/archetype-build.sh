#!/bin/bash

#---------------------------------------------------------------------------
# archetype-build.sh
#
# Generates archetype from project, sanitize it, remove existing version
# from local repo, install it in local repo.
#
# NOTE: Run script from `choonchernlim-archetype-webapp` dir... not from
#       `archetype` dir.
#---------------------------------------------------------------------------

set -e

# Include common functions
source archetype/archetype-functions.sh

# Using Java 8
export JAVA_HOME="`/usr/libexec/java_home -v '1.8*'`"

# Get archetype version from `archetype/archetype.properties`
ARCHETYPE_VERSION=`awk -F= '/^archetype.version/ { print $2 }' archetype/archetype.properties`

TMP_PATH="/tmp/archetype"

# Sanitized archetype copy
PROJECT_PATH="${TMP_PATH}/choonchernlim-archetype-webapp"

ARCHETYPE_BASE_PATH="${PROJECT_PATH}/target/generated-sources/archetype"
ARCHETYPE_RESOURCES_PATH="${ARCHETYPE_BASE_PATH}/src/main/resources/archetype-resources"

# ~/.m2 path for previously installed archetype
ARCHETYPE_LOCAL_REPO_PATH="$HOME/.m2/repository/com/github/choonchernlim/choonchernlim-archetype-webapp/$ARCHETYPE_VERSION/"

echo "Performing Maven clean..."
mvn clean

echo "Recreating temp space..."
rm -rf ${TMP_PATH}
mkdir ${TMP_PATH}

echo "Removing unneeded files for the archetype..."
rsync . ${PROJECT_PATH} -av                         \
    --exclude="*.iml"                               \
    --exclude="*.DS_Store"                          \
    --exclude="LICENSE"                             \
    --exclude="npm-debug.log"                       \
    --exclude="README.md"                           \
    --exclude="CHANGELOG.md"                        \
    --exclude=".git/"                               \
    --exclude=".idea/"                              \
    --exclude="src/main/resources/static/assets/"   \
    --exclude="src/main/webapp/WEB-INF/index.jsp"   \
    --exclude="src/main/frontend/npm-debug.log"     \
    --exclude="src/main/frontend/.webpack/"         \
    --exclude="src/main/frontend/etc/"              \
    --exclude="src/main/frontend/node/"             \
    --exclude="src/main/frontend/node_modules/"

echo "Creating README.md and CHANGELOG.md..."
echo '# Read Me' > ${PROJECT_PATH}/README.md
echo '# Change Log' > ${PROJECT_PATH}/CHANGELOG.md

echo "Changing dir to ${PROJECT_PATH}..."
cd ${PROJECT_PATH}

echo "Creating Maven archetype from existing project..."
mvn clean archetype:create-from-project -Darchetype.properties=archetype/archetype.properties
display_line

echo "Copying ${PROJECT_PATH}/.gitignore to ${ARCHETYPE_RESOURCES_PATH}/.gitignore ..."
cp "${PROJECT_PATH}/.gitignore" "${ARCHETYPE_RESOURCES_PATH}/.gitignore"

echo "Copying ${PROJECT_PATH}/.gitattributes to ${ARCHETYPE_RESOURCES_PATH}/.gitattributes ..."
cp "${PROJECT_PATH}/.gitattributes" "${ARCHETYPE_RESOURCES_PATH}/.gitattributes"

echo "Copying ${PROJECT_PATH}/archetype/pom.xml to ${ARCHETYPE_BASE_PATH}/pom.xml ..."
cp "${PROJECT_PATH}/archetype/pom.xml" "${ARCHETYPE_BASE_PATH}/pom.xml"

currentPath="${ARCHETYPE_BASE_PATH}/pom.xml"
replace_string_in_file "${currentPath}" "<version>0.0.0</version>" "<version>${ARCHETYPE_VERSION}</version>"

currentPath="${ARCHETYPE_RESOURCES_PATH}/src/main/frontend/src/js/layout/components/Layout.js"
replace_string_in_file "${currentPath}" 'https://github.com/choonchernlim/${artifactId}' 'https://github.com/choonchernlim/choonchernlim-archetype-webapp'

currentPath="${ARCHETYPE_RESOURCES_PATH}/src/main/frontend/src/js/layout/components/Home.js"
replace_string_in_file "${currentPath}" 'https://github.com/choonchernlim/${artifactId}' 'https://github.com/choonchernlim/choonchernlim-archetype-webapp'
replace_string_in_file "${currentPath}" '  ${artifactId}' '  choonchernlim-archetype-webapp'

currentPath="${ARCHETYPE_RESOURCES_PATH}/src/main/groovy/config/MailConfig.groovy"
replace_string_in_file "${currentPath}" '${groupId}.springbootmail.config.SpringBootMailConfig' 'com.github.choonchernlim.springbootmail.config.SpringBootMailConfig'

currentPath="${ARCHETYPE_RESOURCES_PATH}/src/main/resources/application-local.yml"
replace_string_in_file "${currentPath}" '${groupId}.choonchernlimArchetypeWebapp' '${package}'

for currentPath in `find ${ARCHETYPE_RESOURCES_PATH} -type f -name '*.groovy'`; do
    replace_string_in_file "${currentPath}" '${groupId}.choonchernlimArchetypeWebapp' '${package}'
done

assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 1 '\${version}'
assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 3 'choonchernlim-archetype-webapp'
assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 0 'archetypes'
assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 0 'com.github.choonchernlim.choonchernlimArchetypeWebapp'
assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 0 'choonchernlimArchetypeWebapp'
assert_string_occurrence "${ARCHETYPE_RESOURCES_PATH}" 0 '__tests__'
display_line

echo "Remove existing archetype from local repository [ ${ARCHETYPE_LOCAL_REPO_PATH} ]..."
rm -rf "${ARCHETYPE_LOCAL_REPO_PATH}"
display_line

echo "Installing new archetype in local repository..."
(cd target/generated-sources/archetype; mvn clean install)

display_line
echo 'Done'