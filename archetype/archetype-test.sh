#!/bin/bash

export JAVA_HOME="`/usr/libexec/java_home -v '1.7*'`"

rm -rf /tmp/archetype/test-archetype

cd /tmp/archetype

mvn archetype:generate -DinteractiveMode=false \
-DarchetypeGroupId=com.github.choonchernlim -DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=1.0.0-SNAPSHOT \
-DgroupId=com.github.choonchernlim.testProject -DartifactId=testProject -Dversion=1.0.0-SNAPSHOT