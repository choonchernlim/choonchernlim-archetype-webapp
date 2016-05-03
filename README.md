# choonchernlim-archetype-webapp

This Maven archetype creates a dynamic web project that plays nicely with Jenkins and Sonar. 

Although it primarily targets WebSphere 8.5.5, the bundled EAR/WAR file will also work with other application servers, such as Tomcat, Jetty, etc.

## Prerequisites

* Java version >= 7.
* Maven version >= 3.3.x.

## Latest Release

```xml
<dependency>
  <groupId>com.github.choonchernlim</groupId>
  <artifactId>choonchernlim-archetype-webapp</artifactId>
  <version>1.0.0</version>
</dependency>
```

For example:

```bash
mvn archetype:generate 
-DinteractiveMode=false 
-DarchetypeGroupId=com.github.choonchernlim 
-DarchetypeArtifactId=choonchernlim-archetype-webapp 
-DarchetypeVersion=1.0.0
-DgroupId=com.github.choonchern.testProject 
-DartifactId=testProject 
-Dversion=1.0.0-SNAPSHOT
```

## Back-End Stack

Handles app security and generates Restful web services for front-end stack to consume.

|  Key Dependencies                                                             | Description                                                             |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|
|[Jetty](http://www.eclipse.org/jetty/)                                         |JEE server (for app dev)                                                 |
|[H2](http://www.h2database.com/html/main.html)                                 |Embedded database (for app dev)                                          |
|[Spring](http://projects.spring.io/spring-framework/)                          |Dependency injection, handles plumbing code                              |
|[Spring Security](http://projects.spring.io/spring-security/)                  |App security                                                             |
|[Spring Data JPA](http://projects.spring.io/spring-data-jpa/)                  |JPA-based repositories                                                   |
|[Hibernate](http://hibernate.org/orm/)                                         |ORM framework                                                            |
|[Guava](https://github.com/google/guava)                                       |Utility API, creates immutable collections, functional-style programming |  
|[Spock](https://github.com/spockframework/spock)                               |Groovy test cases                                                        |
|[Better Preconditions](https://github.com/choonchernlim/better-preconditions)  |Fluent precondition API                                                  |
|[Build Reports](https://github.com/choonchernlim/build-reports)                |Static code analysis reports for Jenkins and Sonar                       |
|[Pojo Builder](https://github.com/mkarneim/pojobuilder)                        |Creates immutable objects                                                |

## Front-End Stack

True single-page app from [front-end-stack](https://github.com/choonchernlim/front-end-stack).

Configure IntelliJ IDEA to use [intellij-config](https://github.com/choonchernlim/intellij-config) to satisfy ESLint rules.

|  Key Dependencies                                                             | Description                                                             |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|
|[Frontend Maven Plugin](https://github.com/eirslett/frontend-maven-plugin)     |Installs Node.js and NPM dependencies using Maven goals                  |
|[NPM](https://www.npmjs.com/)                                                  |JavaScript package manager                                               |
|[Node.js](https://nodejs.org)                                                  |Event-driven I/O server-side JavaScript environment (for app dev)        |
|[Webpack](https://webpack.github.io/) 	                                        |Module bundler                                                           |
|[Webpack Dev Server](https://github.com/webpack/webpack-dev-server)            |Live reloading server (for app dev)                                      |
|[ES6](http://www.ecma-international.org/ecma-262/6.0/) and ES7                 |Latest and greatest JavaScript language                                  |
|[Babel](https://babeljs.io/) 	                                                |Transpiles ES6+ to ES5 to maximize cross browser compatibility           |                   
|[React](https://facebook.github.io/react/)                                     |Handles view layer                                                       |
|[Redux](https://github.com/reactjs/redux)                                      |One-way data flow, inspired by Flux pattern                              |
|[Saga](https://github.com/yelouafi/redux-saga) 	                            |Side Effects middleware using ES6 Generator                              |
|[Immutable](https://facebook.github.io/immutable-js/) 	                        |Creates immutable objects                                                |
|[Material UI](http://www.material-ui.com/) 	                                |UI components, adhering to [Google Material Design](https://www.google.com/design/spec/material-design/introduction.htm)|     
|[Radium](https://github.com/FormidableLabs/radium) and [Radium Grid](https://github.com/FormidableLabs/radium-grid)|Inline CSS and grid layout           |
|[ESLint](https://github.com/eslint/eslint) 	                                |Validates JavaScript, adhering to [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) |                    
|[Mocha](https://mochajs.org/) 	                                                |JavaScript test framework                                                |                    
                                                                                                                                                      
## Usage

### Configuring VCS Ignore List

* The following directories should not be committed into VCS:-
    * `target/`
    * `**/src/main/frontend/etc/`
    * `**/src/main/frontend/node/`   
    * `**/src/main/frontend/node_modules/`

### Starting Jetty Server for Back-End Development

* From `war` module, run `mvn clean jetty:run` to start Jetty server.

* Go to `https://localhost:8443` and select the link to see the project main page.

### Starting Webpack Dev Server for Front-End Development

* Change directory to `frontend` dir.

* Run `npm start`.
    
* Open `http://localhost:8080` in browser. 
 
### Creating EAR File

* From `root` module or `webapp` module, run `mvn clean package`.

* This will create the WAR file and bundle it into the EAR file.

### Creating WAR File

From `war` module, run `mvn clean package`.

This will create just the WAR file.

### Configuring Jenkins

* Create a "Freestyle project" job.

* Under "Add build steps, select "Invoke top-level Maven targets".
    * Goals: `-U clean test site sonar:sonar -Pjenkins -Dsonar.host.url=http://sonar-server`
    * POM: `[project]/[project]-war/pom.xml`
    
## Version Restrictions

Some dependencies and plugins cannot be upgraded to the latest version to ensure they are compatible with Websphere 8.5.5's specs: Java SE 7, Java EE 7, Servlet 3.0, JSP 2.2, JPA: 2.0.

| Dependency                            | Version Used  | Why                                                     |
| --------------------------------------|---------------|---------------------------------------------------------|
| org.mortbay.jetty:jetty-maven-plugin  | 9.2.x         | 9.3.x requires Java 8                                   |
| javax.servlet:javax.servlet-api       | 3.x           | 4.x requires Java 8                                     |
| org.hibernate:hibernate-entitymanager | 4.2.x         | 4.3.x requires JPA 2.1                                  |
| org.jadira.usertype:usertype.core     | 4.x           | 5.x requires Hibernate 5                                |
            
## Troubleshooting

### Problem creating jar: Execution exception: Java heap space

When packaging EAR file, you get this exception:-

    [ERROR] Failed to execute goal org.apache.maven.plugins:maven-ear-plugin:2.10.1:ear (default-ear) 
    on project myproject-webapp-ear: Error assembling EAR: Problem creating jar: Execution exception: 
    Java heap space -> [Help 1]

To fix this, add the following VM arguments to increase the heap space:-

    -Xms2048m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=512m 
