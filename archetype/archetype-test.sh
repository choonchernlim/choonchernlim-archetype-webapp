#!/bin/bash

echo "Using Java 1.8..."
export JAVA_HOME="`/usr/libexec/java_home -v '1.8*'`"

# Get archetype version from `archetype/archetype.properties`
ARCHETYPE_VERSION=`awk -F= '/^archetype.version/ { print $2 }' archetype/archetype.properties`

echo "Removing /tmp/archetype/testProject..."
rm -rf /tmp/archetype/testProject

echo "Navigating to /tmp/archetype..."
cd /tmp/archetype

echo "Generating project from archetype..."
mvn archetype:generate -DinteractiveMode=false -DarchetypeCatalog=local \
-DarchetypeGroupId=com.github.choonchernlim -DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=${ARCHETYPE_VERSION} \
-DgroupId=com.github.choonchernlim.testProject -DartifactId=testProject -Dversion=1.0.0-SNAPSHOT