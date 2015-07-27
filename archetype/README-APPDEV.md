
## pom.xml

    <dependencyManagement>
            <dependencies>
                <dependency>
                    <groupId>edu.mayo.appdev</groupId>
                    <artifactId>appdev-core</artifactId>
                    <version>0.1.5</version>
                </dependency>
            </dependencies>
    </dependencyManagement>
    
## war/pom.xml

    <dependencies>
        <dependency>
            <groupId>edu.mayo.appdev</groupId>
            <artifactId>appdev-core</artifactId>
        </dependency>
    </dependencies>
                            
## war/src/webapp/web.xml

    <context-param>
        <param-name>contextInitializerClasses</param-name>
        <param-value>edu.mayo.appdev.core.config.DefaultApplicationContextInitializer</param-value>
    </context-param>

## war/src/main/resources/appdev.properties

    # REQUIRED if app uses Spring Security and HCMS Module - HCMS Project token for all environments
    appdev.hcms.project.token.DEV=
    appdev.hcms.project.token.QA=
    appdev.hcms.project.token.PROD=
    
    # REQUIRED - Comma delimited developer emails
    appdev.developer.emails=
    
    # OPTIONAL - Comma delimited Spring profile activation prefixes
    appdev.profile.activation.prefixes=

## war/src/main/resources/spring-component-scan.xml

    <context:component-scan base-package="com.github.choonchernlim.choonchernlimArchetypeWebapp,edu.mayo.appdev.core,edu.mayo.hcms">
        <context:exclude-filter type="regex"
                                expression="com.github.choonchernlim.choonchernlimArchetypeWebapp.controller.*"/>
    </context:component-scan>
    