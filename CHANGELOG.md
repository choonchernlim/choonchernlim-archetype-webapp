# Change Log

## X.X.X - 2015-10-XX

* Gulp configuration
    * `sass` task - Don't compile if files are unchanged to speed up the task.
    *  `config.json` - Inconsistent single/double quotes usage.
    * `browserify` task - Configured `babelify` to transpile ES6 and React JSX.

* `spring-servlet.xml`
    * Removed duplicate `<mvc:annotation-driven/>`.

### TODO 

* `EAR`
    *  `<description>` from parent POM appeared in generated `application.xml`.
* Upgrade dependenciesFixes

## 0.2.0 - 2015-10-07

* Maven dependencies
    * Added
        * `com.jayway.jsonpath:json-path:0.9.1:test`.
        * `org.objenesis:objenesis:2.2:test` - to mock concrete classes.
        * `org.hibernate:hibernate-entitymanager:4.2.20.Final` - so that it won't use 4.3.x instead.
        * `org.springframework.data:spring-data-jpa:1.9.0.RELEASE`
    * Upgraded
        * `com.github.eirslett:frontend-maven-plugin` - 0.0.24 to 0.0.26 - Invalid `npm-cli.js` path.
        * `com.github.choonchernlim:build-reports:0.2.2` - 0.2.1 to 0.2.2 - JaCoCo reports won't show up in Jenkins.
    * Removed
        * `joda-time:joda-time-hibernate` - Only target Hibernate 3.x.
        * `joda-time:joda-time-jsptags` - No more JSP rendering pages.
    * Downgraded 
        * `com.jayway.jsonpath:json-path-assert` - 2.0.0 to 0.9.1 - `java.lang.NoSuchMethodError: com.jayway.jsonpath.JsonPath.compile(Ljava/lang/String;[Lcom/jayway/jsonpath/Filter;)Lcom/jayway/jsonpath/JsonPath;`.

* Spring data JPA configuration
    * WAR - `web.xml` - Replaced `OpenSessionInViewFilter` with `OpenEntityManagerInViewFilter`.
    * Renamed `domain` package to `entity` package.
    * Created `dao` package.
    * Created `MockDao`.
    * `spring-data.xml` - Replace Hibernate's transaction manager and session factory with JPA.

* Gulp configuration
    * Modified `browser-sync` configuration to use recommended settings for 2.x.
    * Refactored Gulp task and file names to use snake case instead of camel case.

* NPM modules

```text
bluebird            2.9.x  →  2.10.x 
browser-sync        2.8.x  →   2.9.x 
browserify         11.0.x  →  11.2.x 
gulp-autoprefixer   2.3.x  →   3.0.x 
gulp-changed        1.2.x  →   1.3.x 
gulp-if             1.2.x  →   2.0.x 
gulp-uglify         1.2.x  →   1.4.x 
jasmine-core        2.1.x  →   2.3.x 
jasmine-jquery      2.0.x  →   2.1.x 
karma              0.12.x  →  0.13.x 
karma-browserify    4.0.x  →   4.4.x 
karma-coverage      0.4.x  →   0.5.x 
merge-stream        0.1.x  →   1.0.x 
moment              2.9.x  →  2.10.x 
watchify            3.3.x  →   3.4.x 
```

* `ROOT/pom.xml` - Added `<scm>` stub tag with a TODO to remind user to update the project SCM info so that it won't inherit the SCM info from `build-reports`.
* `src/main/frontend/gulp/config.js` - Removed unused `production` block.
*  `frontend-maven-plugin` - Upgraded node from v0.10.40 to v4.1.2.
*  `frontend-maven-plugin` - Upgraded npm from 2.13.4 to 2.14.7.

## 0.1.1 - 2015-09-01

* `WAR/pom.xml` - Configured ANT script to delete all Pojo builder source files in `initialize` phase instead of `compile` phase.
* `spring-applicationContext.xml` - Commented out `mailSender` by default to allow users to specify their own SMTP host.

## 0.1.0 - 2015-08-31

* Initial.
