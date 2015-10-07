## Update archetype version 

Go to `archetype/archetype.properties`, and change this line:-

    archetype.version=X.X.X

Go to `archetype/test.sh`, and change this line:-

    -DarchetypeVersion=X.X.X

## Run Build Script

In Terminal, navigate to `choonchernlim-archetype-webapp` directory:-

    cd choonchernlim-archetype-webapp

If the script is not executable, run this:-

    chmod 0755 ./archetype/build.sh

Execute shell script.

    ./archetype/build.sh 

## Update CHANGELOG.md

* Create an entry before release.

## Update README.md

* Update version in `Latest Release`.

## Installing Archetype

Push to Nexus
    
    (cd /tmp/archetype/choonchernlim-archetype-webapp/target/generated-sources/archetype; mvn clean deploy -Pexternal-release -Possrh)

