# choonchernlim-archetype-webapp

TBD

## Prerequisites

* Maven version must be between 3.1.0 and 3.2.5.
    * Frontend Maven Plugin requires at least 3.1.0.
    * Maven 3.3.x requires Java 7.

## Troubleshooting

### `libsass` bindings not found. Try reinstalling `node-sass`?

Run `npm rebuild node-sass` to fix the problem. [See here for more info](http://stackoverflow.com/questions/28409100/try-reinstalling-node-sass-on-node-0-12).

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
