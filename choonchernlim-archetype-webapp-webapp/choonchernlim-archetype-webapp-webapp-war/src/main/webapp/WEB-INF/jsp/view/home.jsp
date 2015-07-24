<html>
<head>
</head>
<body>

<div class="page-header">
    <h2>Welcome to Hello World App</h2>
</div>

<div class="row">
    <div class="col-xs-12">
        <p>This project is generated using <a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
            archetype. This documentation helps you to understand, enable or modify features based on your project
            needs.
        </p>
    </div>
</div>

<div class="row">
    <div class="col-xs-12">
        <h3>AppDev Module
            <small><a href="http://cocomo/wiki/index.php/AppDev/AppDev-Core" target="_blank">( Learn More... )</a>
            </small>
        </h3>

        <p><code>src/main/resources/appdev.properties</code></p>

        <div class="col-xs-offset-1 col-xs-10">
            <p>Complete the following configuration:-</p>

<pre>
# REQUIRED if app uses Spring Security and HCMS Module - HCMS Project token for all environments
appdev.hcms.project.token.DEV=
appdev.hcms.project.token.QA=
appdev.hcms.project.token.PROD=

# REQUIRED - Comma delimited developer emails
appdev.developer.emails=

# OPTIONAL - Comma delimited Spring profile activation prefixes
appdev.profile.activation.prefixes=
</pre>
        </div>

    </div>
</div>

<div class="row">
    <div class="col-xs-12">
        <h3>SiteMesh</h3>

        <p><code>src/main/webapp/WEB-INF/jsp/template/main.jsp</code></p>

        <div class="col-xs-offset-1 col-xs-10">
            <p>Modify the template to standardize the look and feel for all web pages.</p>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xs-12">
        <h3>Hibernate</h3>

        <p><code>src/main/webapp/WEB-INF/web.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Uncomment the following lines:-</p>

<pre>
&lt;filter&gt;
    &lt;filter-name&gt;hibernateFilter&lt;/filter-name&gt;
    &lt;filter-class&gt;org.springframework.orm.hibernate4.support.OpenSessionInViewFilter&lt;/filter-class&gt;
&lt;/filter&gt;

...

&lt;filter-mapping&gt;
    &lt;filter-name&gt;hibernateFilter&lt;/filter-name&gt;
    &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</pre>

                <p>Add JNDI resource reference.</p>

<pre>
&lt;resource-ref&gt;
    &lt;res-ref-name&gt;jdbc/db&lt;/res-ref-name&gt;
    &lt;res-type&gt;javax.sql.DataSource&lt;/res-type&gt;
    &lt;res-auth&gt;Container&lt;/res-auth&gt;
    &lt;res-sharing-scope&gt;Shareable&lt;/res-sharing-scope&gt;
&lt;/resource-ref&gt;
</pre>
            </div>
        </div>

        <p><code>src/main/webapp/WEB-INF/ibm-web-bnd.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Add a new resource reference to bind the local JNDI to global JNDI. By doing this, the Middleware WAS
                    admins do not need to manually configure the JNDI(s) when deploying a brand new EAR file through
                    Middleware WAS Dashboard.</p>

<pre>
&lt;resource-ref name="jdbc/db" binding-name="jdbc/db"/&gt;
</pre>
            </div>
        </div>

        <p><code>src/main/resources/spring-datasource-jndi.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Add a JNDI data source pointing to your project database.</p>

<pre>
&lt;jee:jndi-lookup id="dataSource" jndi-name="java:comp/env/jdbc/db"/&gt;
</pre>
            </div>
        </div>

        <p><code>src/main/resources/spring-data.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Change Hibernate dialect to match your database type.</p>

                <p>List your Hibernate annotated classes.</p>

<pre>
&lt;bean id="sessionFactory" class="org.springframework.orm.hibernate4.LocalSessionFactoryBean"&gt;
    &lt;property name="dataSource" ref="dataSource"/&gt;

    &lt;property name="hibernateProperties"&gt;
        &lt;props&gt;
            <strong>&lt;prop key="hibernate.dialect"&gt;org.hibernate.dialect.SQLServerDialect&lt;/prop&gt;</strong>
            &lt;prop key="hibernate.show_sql"&gt;false&lt;/prop&gt;
            &lt;prop key="jadira.usertype.autoRegisterUserTypes"&gt;true&lt;/prop&gt;
            &lt;prop key="hibernate.default_schema"&gt;dbo&lt;/prop&gt;
        &lt;/props&gt;
    &lt;/property&gt;
    &lt;property name="packagesToScan"&gt;
        &lt;list&gt;
            &lt;value&gt;com.github.choonchernlim.choonchernlimArchetypeWebapp.domain&lt;/value&gt;
        &lt;/list&gt;
    &lt;/property&gt;
&lt;/bean&gt;
</pre>
            </div>
        </div>

        <p><code>src/main/java/com/github/choonchernlim/choonchernlimArchetypeWebapp/domain</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>All Hibernate domains are placed in this package.</p>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xs-12">
        <h3>Spring Security</h3>

        <p><code>src/main/webapp/WEB-INF/web.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Uncomment the following lines:-</p>

<pre>
&lt;filter&gt;
    &lt;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;
    &lt;filter-class&gt;org.springframework.web.filter.DelegatingFilterProxy&lt;/filter-class&gt;
&lt;/filter&gt;

...

&lt;filter-mapping&gt;
    &lt;filter-name&gt;springSecurityFilterChain&lt;/filter-name&gt;
    &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</pre>
            </div>
        </div>

        <p><code>src/main/resources/spring-security.xml</code></p>

        <div class="row">
            <div class="col-xs-offset-1 col-xs-10">
                <p>Uncomment the entire file. Tweak the configuration based on your project needs.</p>

<pre>
&lt;security:http pattern="/resources/**" security="none"/&gt;
&lt;security:http pattern="/errors/**" security="none"/&gt;
&lt;security:http pattern="/login" security="none"/&gt;

&lt;security:http auto-config="true"&gt;
    &lt;security:form-login login-page="/login"
                         authentication-failure-url="/login?login_error=1"
                         default-target-url="/"
                         always-use-default-target="true"/&gt;
    &lt;security:logout logout-success-url="/"/&gt;
    &lt;security:intercept-url pattern="/**" access="ROLE_USER"/&gt;
&lt;/security:http&gt;

&lt;bean id="customAuthenticationProvider" class="..."/&gt;

&lt;security:authentication-manager&gt;
    &lt;security:authentication-provider ref="customAuthenticationProvider"/&gt;
&lt;/security:authentication-manager&gt;
</pre>
            </div>
        </div>
    </div>
</div>

<%--
-- Page Scripts
--%>
<content tag="page-scripts">
</content>

</body>
</html>
