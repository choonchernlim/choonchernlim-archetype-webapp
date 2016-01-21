#!/usr/bin/env bash

export JAVA_HOME="`/usr/libexec/java_home -v '1.7*'`"

rm -rf /tmp/archetype/test-archetype

cd /tmp/archetype

mvn archetype:generate -DinteractiveMode=false \
-DarchetypeGroupId=com.github.choonchernlim -DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=0.4.0 \
-DgroupId=com.github.choonchern.testProject -DartifactId=testProject -Dversion=1.0.0-SNAPSHOT