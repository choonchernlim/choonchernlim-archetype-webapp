#!/bin/bash

echo "Using Java 1.7..."
export JAVA_HOME="`/usr/libexec/java_home -v '1.7*'`"

echo "Removing /tmp/archetype/testProject..."
rm -rf /tmp/archetype/testProject

echo "Navigating to /tmp/archetype..."
cd /tmp/archetype

echo "Generating project from archetype..."
mvn archetype:generate -DinteractiveMode=false -DarchetypeCatalog=local \
-DarchetypeGroupId=com.github.choonchernlim -DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=1.0.1-SNAPSHOT \
-DgroupId=com.github.choonchernlim.testProject -DartifactId=testProject -Dversion=1.0.0-SNAPSHOT