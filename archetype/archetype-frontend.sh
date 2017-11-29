#!/bin/bash

#---------------------------------------------------------------------------
# archetype-frontend.sh
#
# Updates frontend stack under `src/main/frontend` with latest copy
# from GitHub.
#
# NOTE: Run script from `choonchernlim-archetype-webapp` dir... not from
#       `archetype` dir.
#---------------------------------------------------------------------------

set -e

# Include common functions
source archetype/archetype-functions.sh

# Get archetype version from `archetype/archetype.properties`
FRONTEND_BRANCH=`awk -F= '/^frontend.branch/ { print $2 }' archetype/archetype.properties`

FRONTEND_PATH="src/main/frontend"

echo "Deleting ${FRONTEND_PATH} dir..."
rm -rf ${FRONTEND_PATH}

echo "Cloning frontend source code from GitHub..."
git clone ${FRONTEND_BRANCH} https://github.com/choonchernlim/front-end-stack.git ${FRONTEND_PATH}

echo "Deleting unneeded files and dirs..."
rm -rf ${FRONTEND_PATH}/.git*
rm -rf ${FRONTEND_PATH}/*.md
rm -rf ${FRONTEND_PATH}/dist

echo "Replacing configuration in package.json..."
currentPath="${FRONTEND_PATH}/package.json"
replace_string_in_file "${currentPath}" '"name": "front-end-stack",' "\"name\": \"choonchernlim-archetype-webapp\","
replace_string_in_file "${currentPath}" '"dist_dir_path": "dist/assets/",' '"dist_dir_path": "../resources/static/assets/",'
replace_string_in_file "${currentPath}" '"entry_file_path": "dist/index.html",' '"entry_file_path": "../webapp/WEB-INF/index.jsp",'
replace_string_in_file "${currentPath}" '"report_dir_path": "reports/"' '"report_dir_path": "../../../target/js-reports/"'

currentPath="${FRONTEND_PATH}/src/js/layout/components/Layout.js"
replace_string_in_file "${currentPath}" 'https://github.com/choonchernlim/front-end-stack' 'https://github.com/choonchernlim/choonchernlim-archetype-webapp'

cp archetype/frontend/src/js/layout/components/Home.js ${FRONTEND_PATH}/src/js/layout/components/Home.js

cd ${FRONTEND_PATH}

echo "Installing dependencies..."
yarn

echo "Building production bundles..."
yarn build
