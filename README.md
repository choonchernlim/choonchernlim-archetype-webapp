# choonchernlim-archetype-webapp

Groovy-based Maven WAR archetype using Spring Boot with the capability of generating static code analysis reports for Continuous Integration servers. 

### Back-End Stack

Handles app security and generates Restful web services for front-end stack to consume. Spring Boot serves as the backbone of this archetype.

|  Key Dependencies                                                             | Description                                                             |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|
|[Swagger](https://swagger.io/swagger-ui/)                                      |RESTful web services documentation tool and viewer                       |
|[Apache Tomcat](https://tomcat.apache.org/)                                    |Embedded JEE server (for local development)                              |
|[H2](http://www.h2database.com/html/main.html)                                 |Embedded database (for local development)                                |
|[Spring](http://projects.spring.io/spring-framework/)                          |Dependency injection, handles plumbing code                              |
|[Spring Security](http://projects.spring.io/spring-security/)                  |App security                                                             |
|[Spring Data JPA](http://projects.spring.io/spring-data-jpa/)                  |JPA-based repositories                                                   |
|[Hibernate](http://hibernate.org/orm/)                                         |ORM framework                                                            |
|[Spock](https://github.com/spockframework/spock)                               |Groovy test cases                                                        |
|[Spring Boot CI](https://github.com/choonchernlim/spring-boot-ci)              |Static code analysis reports for Continuous Integration servers          |

### Front-End Stack

True single-page app from [front-end-stack](https://github.com/choonchernlim/front-end-stack).

## Prerequisites

* Java version = 8.
* Maven version >= 3.3.x.

## Latest Release

```xml
<dependency>
  <groupId>com.github.choonchernlim</groupId>
  <artifactId>choonchernlim-archetype-webapp</artifactId>
  <version>2.0.0</version>
</dependency>
```

For example:

```bash
mvn archetype:generate 
-DinteractiveMode=false 
-DarchetypeGroupId=com.github.choonchernlim 
-DarchetypeArtifactId=choonchernlim-archetype-webapp 
-DarchetypeVersion=2.0.0
-DgroupId=com.github.choonchern.testProject 
-DartifactId=testProject 
-Dversion=1.0.0-SNAPSHOT
```

## Getting Started

* Run `mvn clean spring-boot:run -Dspring-boot.run.profiles=local`.

* Open `https://localhost:8443` in browser.

* Follow further instruction on that main page.

## Spring Profiles

* This archetype is preconfigured with 3 Spring Profiles:-
    * `middleware` (default) - For generated WAR deployed in Middleware servers using JNDI data source. This is the default profile if `spring.profiles.active` is not specified.
    * `local` - For local development using H2 data source.
    * `test` - For running test cases.

## Pre-configured Modules

* `https://localhost:8443/h2-console` - Accessing H2 database when using `local` Spring Profile. Set `JDBC URL` to `jdbc:h2:mem:testdb;schema=dbo`.
* `https://localhost:8443/actuator` - Spring Boot Actuator endpoints.
* `https://localhost:8443/swagger-ui.html` - Swagger UI for interacting with Rest controllers with `/api/**` prefix.

## How To...

### Start Embedded Tomcat Server for Back-End Development

* Run `mvn clean spring-boot:run -Dspring-boot.run.profiles=local`.
    * By default, this will perform `yarn build` to bundle the front-end JS files first before starting the server.
    * If there are no changes on front-end, you can speed it up by running `mvn clean spring-boot:run -Dspring-boot.run.profiles=local -Pskip-frontend-build`
    
* Open `https://localhost:8443` in browser.

### Start Webpack Dev Server for Front-End Development

* Change directory to `src/main/frontend` dir.

* Run `yarn start`.
    
* Open `https://localhost:8080` in browser. 
 
### Create WAR File

* Run `mvn clean package`.

### Configure Jenkins Job

* Create a "Freestyle project" job.

* Under "Add build steps, select "Invoke top-level Maven targets".
    * Goals: `-U clean test site`
    