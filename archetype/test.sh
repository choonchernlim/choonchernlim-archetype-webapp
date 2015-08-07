#!/usr/bin/env bash

export JAVA_HOME="`/usr/libexec/java_home -v '1.6*'`"

rm -rf /tmp/archetype/test

cd /tmp/archetype

mvn archetype:generate -DinteractiveMode=false \
-DarchetypeGroupId=com.github.choonchernlim -DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=0.1.0-SNAPSHOT \
-DgroupId=org.project.test -DartifactId=test -Dversion=1.0.0-SNAPSHOT