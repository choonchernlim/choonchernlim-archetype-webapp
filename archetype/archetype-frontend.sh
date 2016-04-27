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
#    "context_root": "/choonchernlim-archetype-webapp",
#    "dist_dir_path": "../webapp/",
#    "report_dir_path": "../../../../target/reports/",
#  },
#
echo "Replacing configuration in package.json..."
currentPath="${FRONTEND_PATH}/package.json"
replace_string_in_file "${currentPath}" '"name": "front-end-stack",' "\"name\": \"${BASE_PROJECT_NAME}\","
replace_string_in_file "${currentPath}" '"context_root": "/",' "\"context_root\": \"/${BASE_PROJECT_NAME}\","
replace_string_in_file "${currentPath}" '"dist_dir_path": "dist/",' '"dist_dir_path": "../webapp/",'
replace_string_in_file "${currentPath}" '"report_dir_path": "reports/",' '"report_dir_path": "../../../../target/reports/",'

cd ${FRONTEND_PATH}

echo "Installing NPM dependencies..."
npm install

echo "Building production bundles..."
npm run build
