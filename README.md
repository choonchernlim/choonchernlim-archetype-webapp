# choonchernlim-archetype-webapp

TBD

# Prerequisites

* In order to get Jetty Maven Plugin working, create an environment variable `JETTY_ENV_XML` pointing to `jetty-env.xml` file. This file contains the data source information.

* Maven version must be between 3.1.0 and 3.2.5.
    * Frontend Maven Plugin requires at least 3.1.0.
    * Maven 3.3.x requires Java 7.

# Dependency and Plugin Limitations

The added dependencies and plugins must be compatible with Websphere 7's specs: Java SE 6, Java EE 5, Servlet 2.5, JSP 2.1, JPA: 2.0.

* org.mortbay.jetty:jetty-maven-plugin
    * Using 8.x because 9.x requires Java 7 and Servlet 3.0.
* javax.servlet:servlet-api
    * Using 2.5 to match WAS.
* javax.servlet.jsp:jsp-api
    * Using 2.1 to match WAS.
* javax.mail:mail
    * Using 1.4.x to match WAS.
* javax.servlet:jstl
    * Using 2.1 to match WAS.
* commons-dbcp:commons-dbcp
    * Using 1.4 because 2.x requires Java 7.
* org.hibernate:hibernate-core
    * Using 4.2.x because 4.3.x requires JPA 2.1.
* org.springframework:spring-test
    Using 3.x because 4.x requires Servlet 3.0.
* com.google.code.findbugs:findbugs
    * Using 2.x because 3.x requires Java 7
* Node
    Using 0.10.x because 0.12.x causes ["libsass bindings not found" on `node-sass` used by `gulp-sass`](https://github.com/sass/node-sass/issues/918). 