# Change Log

## 0.2.0 - 2015-XX-XX

* Dependency Added
    * `com.jayway.jsonpath:json-path:0.9.1:test`.
    * `org.objenesis:objenesis:2.2:test` - to mock concrete classes.
    * `org.hibernate:hibernate-entitymanager:4.2.20.Final` - so that it won't use 4.3.x instead.
    * `org.springframework.data:spring-data-jpa:1.9.0.RELEASE`
    
* Dependency Upgraded
    * `com.github.eirslett:frontend-maven-plugin` - 0.0.24 to 0.0.26 - Invalid `npm-cli.js` path.
    * `com.github.choonchernlim:build-reports:0.2.2` - 0.2.1 to 0.2.2 - JaCoCo reports won't show up in Jenkins.
    
* Dependency Removed
    * `joda-time:joda-time-hibernate` - Only target Hibernate 3.x.
    * `joda-time:joda-time-jsptags` - No more JSP rendering pages.

* Dependency Downgraded 
    * `com.jayway.jsonpath:json-path-assert` - 2.0.0 to 0.9.1 - `java.lang.NoSuchMethodError: com.jayway.jsonpath.JsonPath.compile(Ljava/lang/String;[Lcom/jayway/jsonpath/Filter;)Lcom/jayway/jsonpath/JsonPath;`.

* `ROOT/pom.xml` - Added `<scm>` stub tag with a TODO to remind user to update the project SCM info so that it won't inherit the SCM info from `build-reports`.
* `src/main/frontend/gulp/config.js` - Removed unused `production` block.

* Configuring Spring Data JPA
    * WAR - `web.xml` - Replaced `OpenSessionInViewFilter` with `OpenEntityManagerInViewFilter`.
    * Renamed `domain` package to `entity` package.
    * Created `dao` package.
    * Created `MockDao`.
    * `spring-data.xml` - Replace Hibernate's transaction manager and session factory with JPA.

### TODO
* Modify `browser-sync` to use recommended config instead deprecated config.

## 0.1.1 - 2015-09-01

* `WAR/pom.xml` - Configured ANT script to delete all Pojo builder source files in `initialize` phase instead of `compile` phase.
* `spring-applicationContext.xml` - Commented out `mailSender` by default to allow users to specify their own SMTP host.

## 0.1.0 - 2015-08-31

* Initial.
