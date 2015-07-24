
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
