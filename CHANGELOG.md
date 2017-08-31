# Change Log

## 2.0.0 - 2017-x-x

* Spring Security: Set X-Frame-Options to DENY to prevent clickjacking attacks.
* Spring Security: Disable OPTIONS method to prevent XST attacks.

## 1.0.1 - 2016-05-23

* `front-end-stack` from `0.2.0` to `0.3.0` - More cross-platform compatible NPM scripts (Mac and Windows).

* Added `maven-source-plugin` to root `pom.xml` so that `mvn deploy` will push source JAR to Nexus.

## 1.0.0 - 2016-05-11

* Replaced existing Gulp stack with `front-end-stack` from https://github.com/choonchernlim/front-end-stack. This stack uses Webpack + React + Redux + ImmutableJS.

* `sonarqube` profile to activate Sonarqube: `mvn sonar:sonar -Psonarqube`

* Node `v5.4.1` to `v5.11.0`
    * `node-sass` doesn't work properly with v6.0.0, throwing these errors:-
```text
[ERROR] (node) v8::ObjectTemplate::Set() with non-primitive values is deprecated
[ERROR] (node) and will stop working in the next major release.
```
* NPM `3.5.3` to `3.8.8`

* Root `pom.xml`
    * Added `distributionManagement` block to satisfy `mvn deploy` to Nexus.
    * Aded `nexus.server` property for user to specify the Nexus server name.
    
* Maven plugins and dependencies
    * Updated

```text
com.github.choonchernlim:build-reports ................ 0.2.4 -> 0.3.2

maven-site-plugin ....................................... 3.4 -> 3.5.1
maven-source-plugin ..................................... 2.4 -> 3.0.0
com.github.eirslett:frontend-maven-plugin .............. 0.0.27 -> 1.0
org.codehaus.mojo:properties-maven-plugin ....... 1.0-alpha-2 -> 1.0.0

cglib:cglib-nodep ..................................... 3.2.0 -> 3.2.2
com.fasterxml.jackson.core:jackson-annotations ........ 2.7.0 -> 2.7.4
com.fasterxml.jackson.core:jackson-core ............... 2.7.0 -> 2.7.4
com.fasterxml.jackson.core:jackson-databind ........... 2.7.0 -> 2.7.4
com.fasterxml.jackson.datatype:jackson-datatype-joda ...
                                                        2.7.0 -> 2.7.4
com.h2database:h2 ................................. 1.4.190 -> 1.4.191
com.jayway.jsonpath:json-path ......................... 2.1.0 -> 2.2.0
com.jayway.jsonpath:json-path-assert .................. 2.1.0 -> 2.2.0
commons-io:commons-io ..................................... 2.4 -> 2.5
joda-time:joda-time ................................... 2.9.1 -> 2.9.3
org.apache.httpcomponents:httpclient .................. 4.5.1 -> 4.5.2
org.codehaus.groovy:groovy-all ........................ 2.4.5 -> 2.4.6
org.slf4j:slf4j-api ................................. 1.7.13 -> 1.7.21
org.slf4j:slf4j-log4j12 ............................. 1.7.13 -> 1.7.21
org.springframework:spring-aop ........ 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-beans ...... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-context .... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-context-support ...
                                        4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-core ....... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-expression ...
                                        4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-jdbc ....... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-orm ........ 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-test ....... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-tx ......... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-web ........ 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework:spring-webmvc ..... 4.2.4.RELEASE -> 4.2.6.RELEASE
org.springframework.data:spring-data-jpa ...
                                       1.9.2.RELEASE -> 1.10.1.RELEASE
org.springframework.security:spring-security-config ...
                                        4.0.3.RELEASE -> 4.1.0.RELEASE
org.springframework.security:spring-security-core ...
                                        4.0.3.RELEASE -> 4.1.0.RELEASE
org.springframework.security:spring-security-taglibs ...
                                        4.0.3.RELEASE -> 4.1.0.RELEASE
org.springframework.security:spring-security-web ...
                                        4.0.3.RELEASE -> 4.1.0.RELEASE
org.springframework.ws:spring-ws-core ...
                                        2.2.4.RELEASE -> 2.3.0.RELEASE
org.springframework.ws:spring-ws-test ...
                                        2.2.4.RELEASE -> 2.3.0.RELEASE
```

## 0.4.0- 2016-01-20

* Configured browser-sync to listen to any file changes under `webapp/resources` dir.

* Migrated from WAS 7.x to WAS 8.5.5.

* Configured Jetty to use HTTPS (currently `https://localhost:8443` vs previously `http://localhost:7777`).
* Modified `gulp watch` to listen to HTTPS link.

* Maven plugins and dependencies
    * Added
        * `org.codehaus.mojo:keytool-maven-plugin:1.5` - For generated self-signed cert for Jetty to use HTTPS
        * `org.eclipse.jetty:jetty-maven-plugin:9.2.14.v20151106` - Upgraded from Jetty 8
    * Removed
        * `org.mortbay.jetty:jetty-maven-plugin:8.1.16.v20140903` - Jetty 9 has different group ID
        * `org.codehaus.mojo:exec-maven-plugin:1.4.0` - Initially added to run `./node_modules/gulp/bin/gulp.js watch`, but user can run that from command line
    * Updated
    
```text
com.github.choonchernlim:build-reports ................ 0.2.2 -> 0.2.4
com.github.eirslett:frontend-maven-plugin ........... 0.0.26 -> 0.0.27
maven-surefire-plugin ................................. 2.19 -> 2.19.1
com.fasterxml.jackson.core:jackson-annotations ........ 2.6.3 -> 2.7.0
com.fasterxml.jackson.core:jackson-core ............... 2.6.3 -> 2.7.0
com.fasterxml.jackson.core:jackson-databind ........... 2.6.3 -> 2.7.0
com.fasterxml.jackson.datatype:jackson-datatype-joda ...
                                                        2.6.3 -> 2.7.0
com.google.guava:guava .............................. 19.0-rc2 -> 19.0
com.google.guava:guava-testlib ...................... 19.0-rc2 -> 19.0
com.jayway.jsonpath:json-path ......................... 0.9.1 -> 2.1.0
com.jayway.jsonpath:json-path-assert .................. 0.9.1 -> 2.1.0
javax.mail:mail ................................... 1.4.7 -> 1.5.0-b01
joda-time:joda-time ..................................... 2.9 -> 2.9.1
org.apache.commons:commons-collections4 ................... 4.0 -> 4.1
org.slf4j:slf4j-api ................................. 1.7.12 -> 1.7.13
org.slf4j:slf4j-log4j12 ............................. 1.7.12 -> 1.7.13
org.springframework:spring-aop ........ 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-beans ...... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-context .... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-context-support ...
                                        4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-core ....... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-expression ...
                                        4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-jdbc ....... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-orm ........ 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-test ....... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-tx ......... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-web ........ 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework:spring-webmvc ..... 4.2.2.RELEASE -> 4.2.4.RELEASE
org.springframework.data:spring-data-jpa ...
                                        1.9.0.RELEASE -> 1.9.2.RELEASE
org.springframework.ws:spring-ws-core ...
                                        2.2.2.RELEASE -> 2.2.4.RELEASE
org.springframework.ws:spring-ws-test ...
                                        2.2.2.RELEASE -> 2.2.4.RELEASE
```

* Node `v4.1.2` to `v5.4.1`
* NPM `2.14.7` to `3.5.3`

* Karma configuration
    * Enabled Babel presets.
    * Hack fix on Instanbul.
    * Removed Proxyquireify.
 
* NPM modules 
    * Added
        * `babel-preset-es2015` - Transpiling ES6 to ES5
        * `babel-preset-react`  - Transpiling React JSX to ES5
    * Removed
        * `proxyquireify` - Not needed due to move to ES6
    * Updated
    
```text
babelify       6.4.x  →   7.2.x 
bluebird       3.0.x  →   3.1.x 
browser-sync   2.9.x  →  2.11.x 
browserify    12.0.x  →  13.0.x 
gulp-uglify    1.4.x  →   1.5.x 
jasmine-core   2.3.x  →   2.4.x 
jquery         2.1.x  →   2.2.x 
moment        2.10.x  →  2.11.x 
watchify       3.6.x  →   3.7.x 
```
            
## 0.3.0 - 2015-11-03

* Gulp configuration
    * `sass` task - Don't compile if files are unchanged to speed up the task.
    *  `config.json` - Inconsistent single/double quotes usage.
    * `browserify` task - Configured `babelify` to transpile ES6 and React JSX.

* `spring-servlet.xml`
    * Removed duplicate `<mvc:annotation-driven/>`.
    * Replaced `<mvc:resources location="/resources/" mapping="/resources/**"/>` with `<mvc:default-servlet-handler/>`.

* `EAR/pom.xml`
    *  Prevented `<description>` from being inherited from parent POM, which then appears in the generated `application.xml`.

* `ROOT/pom.xml`
    *  Configured `maven-enforcer-plugin` to check for minimum Maven version.

* NPM module updates

```text
bluebird           2.10.x  →   3.0.x 
browserify         11.2.x  →  12.0.x 
gulp-autoprefixer   3.0.x  →   3.1.x 
gulp-sass           2.0.x  →   2.1.x 
watchify            3.4.x  →   3.6.x 
```

* Maven plugin updates

```text
maven-archetype-plugin ................................... 2.3 -> 2.4
maven-clean-plugin ..................................... 2.5 -> 3.0.0
maven-enforcer-plugin .................................. 1.4 -> 1.4.1
maven-deploy-plugin ........................................... 2.8.2
maven-install-plugin .......................................... 2.5.2
maven-site-plugin ............................................... 3.4
maven-resources-plugin .......................................... 2.7
maven-surefire-plugin .......................................... 2.19
```

* Maven dependency updates

```text
cglib:cglib-nodep ....................................... 3.1 -> 3.2.0
com.fasterxml.jackson.core:jackson-annotations ........ 2.6.0 -> 2.6.3
com.fasterxml.jackson.core:jackson-core ............... 2.6.0 -> 2.6.3
com.fasterxml.jackson.core:jackson-databind ........... 2.6.0 -> 2.6.3
com.fasterxml.jackson.datatype:jackson-datatype-joda ...
                                                        2.6.0 -> 2.6.3
com.google.guava:guava .............................. 18.0 -> 19.0-rc2
com.google.guava:guava-testlib ...................... 18.0 -> 19.0-rc2
com.h2database:h2 ................................. 1.4.187 -> 1.4.190
joda-time:joda-time ..................................... 2.8.1 -> 2.9
org.apache.httpcomponents:httpclient .................. 4.4.1 -> 4.5.1
org.apache.httpcomponents:httpcore .................... 4.4.1 -> 4.4.4
org.codehaus.groovy:groovy-all ........................ 2.4.4 -> 2.4.5
org.objenesis:objenesis ................................... 2.2 -> 2.3
org.springframework:spring-aop ........ 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-beans ...... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-context .... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-context-support ...
                                        4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-core ....... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-expression ...
                                        4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-jdbc ....... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-orm ........ 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-test ..... 3.2.14.RELEASE -> 3.2.15.RELEASE
org.springframework:spring-tx ......... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-web ........ 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework:spring-webmvc ..... 4.1.7.RELEASE -> 4.2.2.RELEASE
org.springframework.security:spring-security-config ...
                                        4.0.2.RELEASE -> 4.0.3.RELEASE
org.springframework.security:spring-security-core ...
                                        4.0.2.RELEASE -> 4.0.3.RELEASE
org.springframework.security:spring-security-taglibs ...
                                        4.0.2.RELEASE -> 4.0.3.RELEASE
org.springframework.security:spring-security-web ...
                                        4.0.2.RELEASE -> 4.0.3.RELEASE
org.springframework.ws:spring-ws-core ...
                                        2.2.1.RELEASE -> 2.2.2.RELEASE
org.springframework.ws:spring-ws-test ...
                                        2.2.1.RELEASE -> 2.2.2.RELEASE
```

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

* NPM module updates

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
*  Node `v0.10.40` to `v4.1.2`.
*  NPM `2.13.4` to `2.14.7`.

## 0.1.1 - 2015-09-01

* `WAR/pom.xml` - Configured ANT script to delete all Pojo builder source files in `initialize` phase instead of `compile` phase.
* `spring-applicationContext.xml` - Commented out `mailSender` by default to allow users to specify their own SMTP host.

## 0.1.0 - 2015-08-31

* Initial.
