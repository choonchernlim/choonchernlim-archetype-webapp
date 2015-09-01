# choonchernlim-archetype-webapp

This Maven archetype creates a dynamic web project that plays nicely with Jenkins and Sonar. 

Although it primarily targets WebSphere 7.x, the bundled EAR/WAR file will also work with other application servers, such as Tomcat, Jetty, etc.

The following development stack is pre-configured:-

* [Jetty](http://www.eclipse.org/jetty/) - application server for development purpose
* [H2](http://www.h2database.com/html/main.html) - embedded database for development purpose
* [Spring](http://projects.spring.io/spring-framework/) - for dependency injection
* [Spring Security](http://projects.spring.io/spring-security/) - for web security
* [Hibernate](http://hibernate.org/orm/) - for ORM
* [Guava](https://github.com/google/guava) - utility API and for creating immutable collections 
* [Spock](https://github.com/spockframework/spock) - for writing Groovy test cases
* [Better Preconditions](https://github.com/choonchernlim/better-preconditions) - More fluent precondition API
* [Build Reports](https://github.com/choonchernlim/build-reports) - for configuring static code analysis reports for Jenkins and Sonar
* [Pojo Builder](https://github.com/mkarneim/pojobuilder) - for creating immutable objects
* [Frontend Maven Plugin](https://github.com/eirslett/frontend-maven-plugin) - for installing Node.js and Node modules
* [Bootstrap](http://getbootstrap.com/) - for front-end UI
* [Browserify](https://github.com/substack/node-browserify) - for handling JavaScript dependencies
* [Gulp](http://gulpjs.com/) - for front-end automation, including minifying JS, CSS and images
* [Jasmine](https://github.com/jasmine/jasmine) - for writing JavaScript test cases
* [Karma](https://github.com/karma-runner/karma) - for running JavaScript test cases
* Gulp configurations are heavily inspired by [@greypants' gulp-starter](https://github.com/greypants/gulp-starter)

By default, `mvn compile` performs the following tasks:-

* Ensure no banned dependencies are included
* Install Node.js
* Install Node modules
* Run default Gulp task
* Compile Java files
* Clean up Builder files created by Pojo Builder
 
## Latest Release

```xml
<dependency>
  <groupId>com.github.choonchernlim</groupId>
  <artifactId>choonchernlim-archetype-webapp</artifactId>
  <version>0.1.1</version>
</dependency>
```

For example:

```bash
mvn archetype:generate 
-DinteractiveMode=false 
-DarchetypeGroupId=com.github.choonchernlim 
-DarchetypeArtifactId=choonchernlim-archetype-webapp 
-DarchetypeVersion=0.1.1 
-DgroupId=com.github.choonchern.testProject 
-DartifactId=testProject 
-Dversion=1.0.0-SNAPSHOT
```

## Sample Project Structure

If the `groupId` is `com.github.choonchern.testProject` and the `artifactId` is `testProject`, the generated project structure looks like this:-

```text
testProject
├── README.md
├── RELEASES.md
├── pom.xml
└── testProject-webapp
    ├── pom.xml
    ├── testProject-webapp-ear
    │   ├── pom.xml
    │   └── src
    │       └── main
    │           └── application
    │               └── deployment.xml
    └── testProject-webapp-war
        ├── pom.xml
        └── src
            ├── main
            │   ├── frontend
            │   │   ├── gulp
            │   │   │   ├── config.js
            │   │   │   ├── tasks
            │   │   │   │   ├── browserSync.js
            │   │   │   │   ├── browserify.js
            │   │   │   │   ├── default.js
            │   │   │   │   ├── minifyCss.js
            │   │   │   │   ├── minifyImages.js
            │   │   │   │   ├── minifyJs.js
            │   │   │   │   ├── production.js
            │   │   │   │   ├── sass.js
            │   │   │   │   ├── watch.js
            │   │   │   │   └── watchify.js
            │   │   │   └── util
            │   │   │       ├── bundleLogger.js
            │   │   │       └── handleErrors.js
            │   │   ├── gulpfile.js
            │   │   ├── package.json
            │   │   └── src
            │   │       ├── img
            │   │       │   ├── favicon.png
            │   │       │   └── logo.png
            │   │       ├── js
            │   │       │   └── app.js
            │   │       └── scss
            │   │           └── app.scss
            │   ├── java
            │   │   └── com
            │   │       └── github
            │   │           └── choonchern
            │   │               └── testProject
            │   │                   ├── bean
            │   │                   │   └── MockBean.java
            │   │                   ├── constant
            │   │                   │   └── MockConstant.java
            │   │                   ├── controller
            │   │                   │   └── IndexController.java
            │   │                   ├── domain
            │   │                   │   └── MockDomain.java
            │   │                   ├── form
            │   │                   │   └── MockForm.java
            │   │                   ├── service
            │   │                   │   ├── MockService.java
            │   │                   │   └── impl
            │   │                   │       └── MockServiceImpl.java
            │   │                   └── util
            │   │                       └── MockUtil.java
            │   ├── resources
            │   │   ├── log4j.xml
            │   │   ├── messages.properties
            │   │   ├── spring-applicationContext.xml
            │   │   ├── spring-component-scan.xml
            │   │   ├── spring-data.xml
            │   │   ├── spring-datasource-jndi.xml
            │   │   └── spring-security.xml
            │   └── webapp
            │       ├── WEB-INF
            │       │   ├── ibm-web-bnd.xml
            │       │   ├── jsp
            │       │   │   └── index.jsp
            │       │   ├── spring-servlet.xml
            │       │   └── web.xml
            │       └── resources
            │           ├── css
            │           │   └── app.css
            │           ├── img
            │           │   ├── favicon.png
            │           │   └── logo.png
            │           └── js
            │               ├── app.js
            │               └── vendor.js
            └── test
                ├── groovy
                │   └── com
                │       └── github
                │           └── choonchern
                │               └── testProject
                │                   ├── bean
                │                   │   └── MockBeanSpec.groovy
                │                   ├── controller
                │                   │   └── MockControllerSpec.groovy
                │                   └── service
                │                       └── impl
                │                           └── MockServiceImplSpec.groovy
                ├── java
                │   └── com
                │       └── github
                │           └── choonchern
                │               └── testProject
                │                   └── DummyTest.java
                ├── js
                │   └── app-spec.js
                └── resources
                    ├── karma.conf.ci.js
                    ├── karma.conf.js
                    └── spring-test.xml
```                    

## Prerequisites

* Maven version must be between 3.1.0 and 3.2.5.
    * Frontend Maven Plugin requires at least 3.1.0.
    * Maven 3.3.x requires Java 7.

## Usage

### Configuring VCS Ignore List

* The following directories should not be committed into VCS:-
    * `target/`
    * `**/src/main/frontend/etc/`
    * `**/src/main/frontend/node/`   
    * `**/src/main/frontend/node_modules/`

### Starting Jetty Server for Development

* From `war` module, run `mvn clean jetty:run` to start Jetty server.

* Go to `http://localhost:7777` and select the link to see the project main page.

### Auto Watching JS/CSS Changes

* From `war` module, run `mvn exec:exec`.

* You will be directed to `http://localhost:3000/[project]`. 

* IMPORTANT: Don't run `mvn jetty:run exec:exec` in one command line because both goals are blocking processes. Instead, run `mvn jetty:run` in one terminal, and `mvn exec:exec` in another terminal.
 
### Creating EAR File

* From `root` module or `webapp` module, run `mvn clean package`.

* This will create the WAR file and bundle it into the EAR file.

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
