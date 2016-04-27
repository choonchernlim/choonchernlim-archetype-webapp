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

# Must run script with Java 6 to prevent weird errors
export JAVA_HOME="`/usr/libexec/java_home -v '1.7*'`"

# Get archetype version from `archetype/archetype.properties`
ARCHETYPE_VERSION=`awk -F= '/^archetype.version/ { print $2 }' archetype/archetype.properties`

TMP_PATH="/tmp/archetype"

# Sanitized archetype copy
PROJECT_PATH="${TMP_PATH}/choonchernlim-archetype-webapp"

ARCHETYPE_BASE_PATH="${PROJECT_PATH}/target/generated-sources/archetype"
ARCHETYPE_RESOURCES_PATH="$ARCHETYPE_BASE_PATH/src/main/resources/archetype-resources"

# ~/.m2 path for previously installed archetype
ARCHETYPE_LOCAL_REPO_PATH="$HOME/.m2/repository/com/github/choonchernlim/choonchernlim-archetype-webapp/$ARCHETYPE_VERSION/"

# Remove all `target` dirs first, if any
mvn clean

# Recreate temp space
rm -rf ${TMP_PATH}
mkdir ${TMP_PATH}

# Move archetype/ dir to be sibling of choonchernlim-archetype-webapp/ dir so that it won't get included
# into the archetype itself
rsync . ${TMP_PATH} -av \
--include="archetype/" \
--include="archetype.properties" \
--include="build.sh" \
--exclude="*" \

# Remove all unneeded files for the archetype. `archetype/` dir cannot be removed at this point because
# `mvn archetype:create-from-project` needs a property file that resides in it.
rsync . ${PROJECT_PATH} -av \
--exclude="*.iml" \
--exclude="LICENSE" \
--exclude="README.md" \
--exclude="CHANGELOG.md" \
--exclude=".git/" \
--exclude=".idea/" \
--exclude="archetype/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/npm-debug.log" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/etc/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/node/" \
--exclude="choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war/src/main/frontend/node_modules/"

echo '# Read Me' > ${PROJECT_PATH}/README.md
echo '# Change Log' > ${PROJECT_PATH}/CHANGELOG.md

# Change dir to the temp space
cd ${PROJECT_PATH}

# Create archetype from existing project
echo "Creating Maven archetype from existing project..."
mvn clean archetype:create-from-project -Darchetype.properties=../archetype/archetype.properties
display_line

# Now, it is safe to get rid of `archetype` dirs
#rm -rf ${PROJECT_PATH}/archetype
#rm -rf ${ARCHETYPE_RESOURCES_PATH}/archetype

# Pluck out `<parent>...</parent>` from `pom.xml` and replace all line breaks with blank string to prevent `sed`
# from throwing "unescaped newline inside substitute pattern" error. Then, use xmllint to reformat the file back.
echo "Adding parent pom to archetype pom..."
PARENT_POM=`awk '/<parent>/,/<\/parent>/' pom.xml | tr '\n' ' '`
sed -i '' "s|</modelVersion>|</modelVersion> ${PARENT_POM}|g" "$ARCHETYPE_BASE_PATH/pom.xml"
export XMLLINT_INDENT="    "
xmllint --output "$ARCHETYPE_BASE_PATH/pom.xml" --format "$ARCHETYPE_BASE_PATH/pom.xml"

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-ear/pom.xml"
replace_string_in_file "${currentPath}" '<artifactId>choonchernlim-archetype-webapp-webapp-war</artifactId>' '<artifactId>${rootArtifactId}-webapp-war</artifactId>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/frontend/package.json"
replace_string_in_file "${currentPath}" '"name": "choonchernlim-archetype-webapp"' '"name": "${rootArtifactId}"'
replace_string_in_file "${currentPath}" '"context_root": "/choonchernlim-archetype-webapp"' '"context_root": "/${rootArtifactId}"'

# TODO LIMC need to replace "choonchernlim-archetype-webapp" on assets dir with ${rootArtifactId}

#currentPath=`ls -a ${WEBAPP_PATH}/assets/js/app.*.js`
#replace_string_in_file "${currentPath}" '"name": "front-end-stack",' "\"name\": \"${BASE_PROJECT_NAME}\","


currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/webapp/index.html"
replace_string_in_file "${currentPath}" 'choonchernlim-archetype-webapp' '${rootArtifactId}'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/webapp/WEB-INF/web.xml"
replace_string_in_file "${currentPath}" '<display-name>choonchernlim-archetype-webapp</display-name>' '<display-name>${rootArtifactId}</display-name>'

currentPath="${ARCHETYPE_RESOURCES_PATH}/__rootArtifactId__-webapp/__rootArtifactId__-webapp-war/src/main/webapp/WEB-INF/jsp/index.jsp"
replace_string_in_file "${currentPath}" '<title>choonchernlim-archetype-webapp</title>' '<title>${rootArtifactId}</title>'
replace_string_in_file "${currentPath}" '<span>choonchernlim-archetype-webapp</span>' '<span>${rootArtifactId}</span>'

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
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 3 'choonchernlim-archetype-webapp'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'archetypes'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'com.github.choonchernlim.choonchernlimArchetypeWebapp'
find_string_occurence "${ARCHETYPE_RESOURCES_PATH}" 0 'choonchernlimArchetypeWebapp'
display_line

echo "Remove existing archetype from local repository..."
rm -rf "$ARCHETYPE_LOCAL_REPO_PATH"
display_line

echo "Installing new archetype in local repository..."
(cd target/generated-sources/archetype; mvn clean install)

display_line
echo 'Done'