## Update archetype version 

Go to `archetype/archetype.properties`.
 
Change this line:-

    archetype.version=X.X.X

## Run Build Script

In Terminal, navigate to `choonchernlim-archetype-webapp` directory:-

    cd choonchernlim-archetype-webapp

If the script is not executable, run this:-

    chmod 0755 ./archetype/build.sh

Execute shell script.

    ./archetype/build.sh 

## Installing Archetype

Push to Nexus

    mvn clean deploy
