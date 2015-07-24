## To upgrade to another version, change the pom.xml version to latest version:-

webspherearchetype/pom.xml

    version

webspherearchetype-war/pom.xml

    parent -> version

webspherearchetype-ear/pom.xml

    parent -> version
    dependencies -> dependency -> version

Change `<version>` (2 of them) in `src/main/java/webapp/WEB-INF/jsp/view/home.jsp`

## webspherearchetype/pom.xml

Change standard-parent version to 1.2:-
    
    <parent>
        <groupId>edu.mayo.commons.parents</groupId>
        <artifactId>standard-parent</artifactId>
        <version>1.2</version>
    </parent>

The reason for this is because JaCoCo configured in standard-parent 1.3.0 onwards will throw this exception
when trying to create the archetype from project:-

    [ERROR] Failed to execute goal on project webspherearchetype-ear: Could not resolve dependencies for project
    edu.mayo.commons.archetypes:webspherearchetype-ear:ear:1.4.0: Failure to find
    edu.mayo.commons.archetypes:webspherearchetype-war:war:1.4.0 in http://panama/nexus/content/groups/public was
    cached in the local repository, resolution will not be reattempted until the update interval of HCPR Nexus has
    elapsed or updates are forced -> [Help 1]

## Creating Archetype from Project

In Terminal, navigate to "websphere-archetype-hcpr" folder and run:-

    mvn clean archetype:create-from-project -Pdisable-jacoco -Darchetype.properties=archetype.properties

## Revert `standard-parent` Version

Change standard-parent version from 1.2 back to the latest version in `/target/generated-sources/archetype/src/main/resources/archetype-resources/pom.xml`

## Sanitize Generated Archetype : `sanitize-archetype.sh`

Update archetype version first. 

    ARCHETYPE_VERSION='1.7.0'

Execute shell script.

## Installing Archetype

Navigate to `/target/generated-sources/archetype` and run:

    cd target/generated-sources/archetype
    mvn clean install

Navigate to `~/.m2/repository/edu/mayo/commons/archetypes/websphere-archetype-hcpr/[version]`

Push to Nexus

    mvn clean archetype:create-from-project -Ptest -Darchetype.properties=archetype.properties




<!--
## Displaying `target` directory in IntelliJ

If "target" folder doesn't appear, do a "compile" under "websphere-archetype-hcpr".

## generated archetype's root pom.xml

- artifactId: "webspherearchetype-archetype" to "websphere-archetype-hcpr"
- name: "webspherearchetype-archetype" to "websphere-archetype-hcpr"

## `src/main/resources/archetype-resources/__rootArtifactId__-ear/pom.xml`

    <webModule>
        <groupId>edu.mayo.commons.archetypes</groupId>
        <artifactId>webspherearchetype-war</artifactId>
        ...
    </webModule>

... to ...

    <webModule>
        <groupId>${package}</groupId>
        <artifactId>${rootArtifactId}-war</artifactId>
        ...
    </webModule>

## XML Handling

- For 3 pom.xml files (root, ear and war)

    - Do a "replace all" of # with $symbol_pound.
    - Add this line at the top of the XML file:-

    <?xml version="1.0" encoding="UTF-8"?>

... to...

    #set( $symbol_pound = '#' )
    <?xml version="1.0" encoding="UTF-8"?>


## src/main.resources/archetype-resources

- Delete all files/directory under "idea" without deleting the "idea" directory.

- Copy src/main/resources/archetype-resources/workspace.xml to idea/workspace.xml

- Delete the following files:-
    - readme.txt.
    - workspace.xml.
    - websphere-archetype-hcpr.iml.
    - __rootArtifactId__-ear/ear.iml.
    - __rootArtifactId__-ear/webspherearchetype-ear.iml.
    - __rootArtifactId__-war/webspherearchetype-war.iml.

## src/main/resources/archetype-resources/__rootArtifactId__-war/src/main/webapp/WEB-INF/jsp/view/home.jsp

    <code>${package}:websphere-archetype-hcpr:${version}</code>

... to ...

    <code>edu.mayo.commons.archetypes:websphere-archetype-hcpr:[VERSION]</code>


... and ...


    <a href="http://cocomo.mayo.edu/wiki/index.php/Maven/Custom_Archetypes/websphere-archetype-hcpr/${version}">release notes</a>.

... to ...

    <a href="http://cocomo.mayo.edu/wiki/index.php/Maven/Custom_Archetypes/websphere-archetype-hcpr/[VERSION]">release notes</a>.

## src/main/resources/archetype-resources/__rootArtifactId__-war/src/main/webapp/WEB-INF/jsp/template/main.jsp

    <script type="text/javascript" src="/goodies/lib/respond/${version}.0/respond.min.js"></script>

... to ...

    <script type="text/javascript" src="/goodies/lib/respond/1.3.0/respond.min.js"></script>

## src

- Do a recursive find on ${version} to ensure there's nothing left.
-->

