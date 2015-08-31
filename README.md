# choonchernlim-archetype-webapp

TBD

## Prerequisites

* Maven version must be between 3.1.0 and 3.2.5.
    * Frontend Maven Plugin requires at least 3.1.0.
    * Maven 3.3.x requires Java 7.

## Usage

### Starting Jetty Server for Development

From `war` module, run `mvn clean jetty:run` to start Jetty server.

Go to http://localhost:7777 and select the link to see the project main page.

### Watching JS/CSS Changes and Refresh Page using BrowserSync

From `war` module, run `mvn exec:exec`.

You will be directed to http://localhost:3000/[project]. 

IMPORTANT: Don't run `mvn jetty:run exec:exec` in one command line because both goals are blocking processes. Instead,
run `mvn jetty:run` in one terminal, and `mvn exec:exec` in another terminal.
 
### Creating EAR File

From `root` module or `webapp` module, run `mvn clean package`.

This will create the WAR file and bundle it into the EAR file.

### Creating WAR File

From `war` module, run `mvn clean package`.

This will create just the WAR file.

### Jenkins Integration

* Create a "Freestyle project" job. [Don't create a "Maven project" job if you are using Java 6](https://issues.jenkins-ci.org/browse/JENKINS-29004).

* Under "Add build steps, select "Invoke top-level Maven targets".
    * Goals: `clean test site -Pjenkins`
    * POM: `[project]/[project]-war/pom.xml`

* Configure post-build actions accordingly.

The `jenkins` profile will not run `gulp production` that will regenerate the client-side source files in Jenkins. This ensures Karma is running the tests against the existing source files under `resources/js` directory.
    
## Version Restrictions

Some dependencies and plugins cannot be upgraded to the latest version to ensure they are compatible with Websphere 7's specs: Java SE 6, Java EE 5, Servlet 2.5, JSP 2.1, JPA: 2.0.

| Dependency                            | Version Used  | Why                                 |
| --------------------------------------|---------------|-------------------------------------|
| org.mortbay.jetty:jetty-maven-plugin  | 8.x           | 9.x requires Java 7 and Servlet 3.0 |
| javax.servlet:servlet-api             | 2.5           | Match WAS 7 specs                   |
| javax.servlet.jsp:jsp-api             | 2.1           | Match WAS 7 specs                   |
| javax.mail:mail                       | 1.4.x         | Match WAS 7 specs                   |
| javax.servlet:jstl                    | 2.1           | Match WAS 7 specs                   |
| commons-dbcp:commons-dbcp             | 1.4           | 2.x requires Java 7                 |
| org.hibernate:hibernate-core          | 4.2.x         | 4.3.x requires JPA 2.1              |
| org.springframework:spring-test       | 3.x           | 4.x requires Servlet 3.0            |
| com.google.code.findbugs:findbugs     | 2.x           | 3.x requires Java 7                 |

## Troubleshooting

### Problem creating jar: Execution exception: Java heap space

When packaging EAR file, you get this exception:-

    [ERROR] Failed to execute goal org.apache.maven.plugins:maven-ear-plugin:2.10.1:ear (default-ear) 
    on project myproject-webapp-ear: Error assembling EAR: Problem creating jar: Execution exception: 
    Java heap space -> [Help 1]

To fix this, add the following VM arguments to increase the heap space:-

    -Xms2048m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=512m 
