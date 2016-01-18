# choonchernlim-archetype-webapp

This Maven archetype creates a dynamic web project that plays nicely with Jenkins and Sonar. 

Although it primarily targets WebSphere 8.5.5, the bundled EAR/WAR file will also work with other application servers, such as Tomcat, Jetty, etc.

The following development stack is pre-configured:-

* [Jetty](http://www.eclipse.org/jetty/) - application server for development purpose
* [H2](http://www.h2database.com/html/main.html) - embedded database for development purpose
* [Spring](http://projects.spring.io/spring-framework/) - for dependency injection
* [Spring Security](http://projects.spring.io/spring-security/) - for web security
* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/) - for implementing JPA based repositories
* [Hibernate](http://hibernate.org/orm/) - for ORM
* [Guava](https://github.com/google/guava) - utility API and for creating immutable collections 
* [Spock](https://github.com/spockframework/spock) - for writing Groovy test cases
* [Better Preconditions](https://github.com/choonchernlim/better-preconditions) - More fluent precondition API
* [Build Reports](https://github.com/choonchernlim/build-reports) - for configuring static code analysis reports for Jenkins and Sonar
* [Pojo Builder](https://github.com/mkarneim/pojobuilder) - for creating immutable objects
* [Frontend Maven Plugin](https://github.com/eirslett/frontend-maven-plugin) - for installing Node.js and Node modules
* [Bootstrap](http://getbootstrap.com/) - for front-end UI
* [Browserify](https://github.com/substack/node-browserify) - for handling JavaScript dependencies
* [Babelify](https://www.npmjs.com/package/babelify) - for transpiling ECMAScript 2015 (ES6) and React's JSX to ES5.
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
 
## Prerequisites

* Java version >= 7.
* Maven version >= 3.3.x.

## Latest Release

```xml
<dependency>
  <groupId>com.github.choonchernlim</groupId>
  <artifactId>choonchernlim-archetype-webapp</artifactId>
  <version>0.3.0</version>
</dependency>
```

For example:

```bash
mvn archetype:generate 
-DinteractiveMode=false 
-DarchetypeGroupId=com.github.choonchernlim 
-DarchetypeArtifactId=choonchernlim-archetype-webapp 
-DarchetypeVersion=0.3.0
-DgroupId=com.github.choonchern.testProject 
-DartifactId=testProject 
-Dversion=1.0.0-SNAPSHOT
```

## Sample Project Structure

If the `groupId` is `com.github.choonchern.testProject` and the `artifactId` is `testProject`, the generated project structure looks like this:-

```text
➜  tree . -I '*.iml' 
├── CHANGELOG.md
├── README.md
├── pom.xml
└── testProject-webapp
    ├── pom.xml
    ├── testProject-webapp-ear
    │   ├── pom.xml
    │   ├── src
    │   │   └── main
    │   │       └── application
    │   │           └── deployment.xml
    │   └── target
    │       └── application.xml
    └── testProject-webapp-war
        ├── pom.xml
        └── src
            ├── main
            │   ├── frontend
            │   │   ├── gulp
            │   │   │   ├── config.js
            │   │   │   ├── tasks
            │   │   │   │   ├── browser-sync.js
            │   │   │   │   ├── browserify.js
            │   │   │   │   ├── default.js
            │   │   │   │   ├── optimize-images.js
            │   │   │   │   ├── sass.js
            │   │   │   │   ├── watch.js
            │   │   │   │   └── watchify.js
            │   │   │   └── util
            │   │   │       ├── browser-sync-instance.js
            │   │   │       ├── bundle-logger.js
            │   │   │       └── handle-errors.js
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
            │   │           └── choonchernlim
            │   │               └── testProject
            │   │                   ├── bean
            │   │                   │   └── MockBean.java
            │   │                   ├── constant
            │   │                   │   └── MockConstant.java
            │   │                   ├── controller
            │   │                   │   └── IndexController.java
            │   │                   ├── dao
            │   │                   │   └── MockDao.java
            │   │                   ├── entity
            │   │                   │   └── MockEntity.java
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
            │           │   ├── app.css
            │           │   └── app.min.css
            │           ├── img
            │           │   ├── favicon.png
            │           │   └── logo.png
            │           └── js
            │               ├── app.js
            │               ├── app.min.js
            │               ├── vendor.js
            │               └── vendor.min.js
            └── test
                ├── groovy
                │   └── com
                │       └── github
                │           └── choonchernlim
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
                │           └── choonchernlim
                │               └── testProject
                │                   └── DummyTest.java
                ├── js
                │   └── app-spec.js
                └── resources
                    ├── karma.conf.ci.js
                    ├── karma.conf.js
                    └── spring-test.xml

56 directories, 61 files
```                    

## Usage

### Configuring VCS Ignore List

* The following directories should not be committed into VCS:-
    * `target/`
    * `**/src/main/frontend/etc/`
    * `**/src/main/frontend/node/`   
    * `**/src/main/frontend/node_modules/`

### Starting Jetty Server for Development

* From `war` module, run `mvn clean jetty:run` to start Jetty server.

* Go to `https://localhost:8443` and select the link to see the project main page.

### Auto Watching JS/CSS Changes

* Change directory to `frontend` dir.

* Run `./node_modules/gulp/bin/gulp.js watch`.
    
* You will be directed to `https://localhost:3000/[project]`. 
 
### Creating EAR File

* From `root` module or `webapp` module, run `mvn clean package`.

* This will create the WAR file and bundle it into the EAR file.

### Creating WAR File

From `war` module, run `mvn clean package`.

This will create just the WAR file.

### Jenkins Integration

* Create a "Freestyle project" job.

* Under "Add build steps, select "Invoke top-level Maven targets".
    * Goals: `clean test site -Pjenkins`
    * POM: `[project]/[project]-war/pom.xml`

* Configure post-build actions accordingly.

The `jenkins` profile will not run `gulp production` that will regenerate the client-side source files in Jenkins. This ensures Karma is running the tests against the existing source files under `resources/js` directory.
    
## Version Restrictions

Some dependencies and plugins cannot be upgraded to the latest version to ensure they are compatible with Websphere 8.5.5's specs: Java SE 7, Java EE 7, Servlet 3.0, JSP 2.2, JPA: 2.0.

| Dependency                            | Version Used  | Why                                                     |
| --------------------------------------|---------------|---------------------------------------------------------|
| org.mortbay.jetty:jetty-maven-plugin  | 9.2.x         | 9.3.x requires Java 8                                   |
| javax.servlet:servlet-api             | 3.0.1         | Match WAS 8.5.5 specs                                   |
| javax.servlet.jsp:jsp-api             | 2.2           | Match WAS 8.5.5 specs                                   |
| javax.mail:mail                       | 1.4.x         | Match WAS 8.5.5 specs                                   |
| javax.servlet:jstl                    | 1.2           | Match WAS 8.5.5 specs                                   |
| org.hibernate:hibernate-core          | 4.2.x         | 4.3.x requires JPA 2.1                                  |
| org.jadira.usertype:usertype.core     | 4.x           | 5.x requires Hibernate 5                                |
            
## Troubleshooting

### Problem creating jar: Execution exception: Java heap space

When packaging EAR file, you get this exception:-

    [ERROR] Failed to execute goal org.apache.maven.plugins:maven-ear-plugin:2.10.1:ear (default-ear) 
    on project myproject-webapp-ear: Error assembling EAR: Problem creating jar: Execution exception: 
    Java heap space -> [Help 1]

To fix this, add the following VM arguments to increase the heap space:-

    -Xms2048m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=512m 
