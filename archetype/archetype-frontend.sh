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

WAR_PATH='choonchernlim-archetype-webapp-webapp/choonchernlim-archetype-webapp-webapp-war'
WEBAPP_PATH="${WAR_PATH}/src/main/webapp"
FRONTEND_PATH="${WAR_PATH}/src/main/frontend"

echo "Deleting ${FRONTEND_PATH} dir..."
rm -rf ${FRONTEND_PATH}

echo "Cloning frontend source code from GitHub..."
git clone https://github.com/choonchernlim/front-end-stack.git ${FRONTEND_PATH}

echo "Deleting unneeded files and dirs..."
rm -rf ${FRONTEND_PATH}/.git*
rm -rf ${FRONTEND_PATH}/*.md
rm -rf ${FRONTEND_PATH}/dist

#
#  "name": "choonchernlim-archetype-webapp",
#  "config": {
#    "context_root": "/choonchernlim-archetype-webapp/",
#    "dist_uri": "/choonchernlim-archetype-webapp/assets/",
#    "src_dir_path": "src/",
#    "test_dir_path": "test/",
#    "dist_dir_path": "../webapp/assets/",
#    "entry_file_path": "../webapp/WEB-INF/html/index.html",
#    "report_dir_path": "../../../../target/reports/",
#  },
#
echo "Replacing configuration in package.json..."
currentPath="${FRONTEND_PATH}/package.json"
replace_string_in_file "${currentPath}" '"name": "front-end-stack",' "\"name\": \"choonchernlim-archetype-webapp\","
replace_string_in_file "${currentPath}" '"context_root": "/",' "\"context_root\": \"/choonchernlim-archetype-webapp/\","
replace_string_in_file "${currentPath}" '"dist_uri": "/assets/",' "\"dist_uri\": \"/choonchernlim-archetype-webapp/assets\","
replace_string_in_file "${currentPath}" '"dist_dir_path": "dist/assets/",' '"dist_dir_path": "../webapp/assets/",'
replace_string_in_file "${currentPath}" '"entry_file_path": "dist/index.html",' '"entry_file_path": "../webapp/WEB-INF/html/index.html",'
replace_string_in_file "${currentPath}" '"report_dir_path": "reports/",' '"report_dir_path": "../../../../target/reports/",'

currentPath="${FRONTEND_PATH}/src/js/layout/components/Layout.js"
replace_string_in_file "${currentPath}" 'https://github.com/choonchernlim/front-end-stack' 'https://github.com/choonchernlim/choonchernlim-archetype-webapp'

cp archetype/frontend/Home.js ${FRONTEND_PATH}/src/js/home/components/Home.js

cd ${FRONTEND_PATH}

echo "Installing NPM dependencies..."
npm install

echo "Building production bundles..."
npm run build
