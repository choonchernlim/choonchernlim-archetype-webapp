# Change Log

## TODO

* `WAR/pom.xml` Remove `joda-time:joda-time-hibernate` - Only target Hibernate 3.x.
* `WAR/pom.xml` Remove `joda-time:joda-time-jsptags` - No more JSP rendering pages.
* `web.xml` - Replace `OpenSessionInViewFilter` with `OpenEntityManagerInViewFilter.
* `spring-data.xml` - Replace Hibernate's transaction manager and session factory with JPA.
* Rename `domain` package to `entity` package.
* Create `dao` package
* Convert Dao to Spring Data JPA.
            
## 0.1.1 - 2015-09-01

* `WAR/pom.xml` - Configured ANT script to delete all Pojo builder source files in `initialize` phase instead of `compile` phase.
* `spring-applicationContext.xml` - Commented out `mailSender` by default to allow users to specify their own SMTP host.

## 0.1.0 - 2015-08-31

* Initial.
