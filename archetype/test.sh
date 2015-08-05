#!/usr/bin/env bash


rm -rf /tmp/archetype/test
mkdir /tmp/archetype/test

cd /tmp/archetype/test

/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/bin/java -Dmaven.home=/usr/local/Cellar/maven32/3.2.5/libexec \
-Dclassworlds.conf=/usr/local/Cellar/maven32/3.2.5/libexec/bin/m2.conf -Dfile.encoding=UTF-8 -classpath /usr/local/Cellar/maven32/3.2.5/libexec/boot/plexus-classworlds-2.5.2.jar \
org.codehaus.classworlds.Launcher -Didea.version=14.1.4 -DinteractiveMode=false \
-DgroupId=project.test -DartifactId=test -Dversion=1.0-SNAPSHOT -DarchetypeGroupId=com.github.choonchernlim \
-DarchetypeArtifactId=choonchernlim-archetype-webapp -DarchetypeVersion=0.1.0-SNAPSHOT \
org.apache.maven.plugins:maven-archetype-plugin:RELEASE:generate
