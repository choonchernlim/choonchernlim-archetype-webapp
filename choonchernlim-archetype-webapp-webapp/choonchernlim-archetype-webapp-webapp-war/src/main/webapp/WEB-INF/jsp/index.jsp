<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ROOT" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>choonchern-archetype-webapp</title>

    <link rel="stylesheet" href="${ROOT}/resources/dist/app.css"/>
</head>
<body data-spy="scroll" data-target="#home-left-navbar" data-offset="100">

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#header-navbar-collapse" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">choonchern-archetype-webapp</a>
        </div>

        <div id="header-navbar-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">GitHub</a></li>
                <li><a href="http://myshittycode.com">Blog</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div class="row">
        <div class="col-md-2">
            <div id="home-left-navbar" data-spy="affix" class="hidden-xs hidden-sm">
                <ul class="nav nav-pills nav-stacked" role="tablist">
                    <li role="presentation">
                        <a href="#hibernate" aria-controls="hibernate" role="tab">Hibernate</a>
                    </li>
                    <li role="presentation">
                        <a href="#spring-security" aria-controls="spring-security" role="tab">Spring Security</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-10">
            <div class="page-header">
                <h2>Welcome to Hello World App</h2>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dolor orci. Mauris tempus mattis
                urna
                nec
                molestie. Suspendisse orci arcu, rutrum ac feugiat at, interdum eu diam. Sed semper sagittis
                tristique.
                Donec suscipit ex ac leo egestas ultrices. Phasellus efficitur dui ac purus fringilla, sit amet
                faucibus
                ex
            </p>

            <div class="tab-content">
                <!--
                #################################
                Hibernate
                #################################
                -->
                <div id="hibernate" role="tabpanel" class="tab-pane active">
                    <h3>Hibernate</h3>

                    <p><code>src/main/webapp/WEB-INF/web.xml</code></p>

                    <div class="row">
                        <div class="col-md-offset-1">
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
                        <div class="col-md-offset-1">
                            <p>Add a new resource reference to bind the local JNDI to global JNDI. By doing this, the
                                Middleware WAS
                                admins do not need to manually configure the JNDI(s) when deploying a brand new EAR file
                                through
                                Middleware WAS Dashboard.</p>

<pre>
&lt;resource-ref name="jdbc/db" binding-name="jdbc/db"/&gt;
</pre>
                        </div>
                    </div>

                    <p><code>src/main/resources/spring-datasource-jndi.xml</code></p>

                    <div class="row">
                        <div class="col-md-offset-1">
                            <p>Add a JNDI data source pointing to your project database.</p>

<pre>
&lt;jee:jndi-lookup id="dataSource" jndi-name="java:comp/env/jdbc/db"/&gt;
</pre>
                        </div>
                    </div>

                    <p><code>src/main/resources/spring-data.xml</code></p>

                    <div class="row">
                        <div class="col-md-offset-1">
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
                        <div class="col-md-offset-1">
                            <p>All Hibernate domains are placed in this package.</p>
                        </div>
                    </div>
                </div>

                <!--
                #################################
                section
                #################################
                -->
                <div id="spring-security" role="tabpanel" class="tab-pane active">
                    <h3>Spring Security</h3>

                    <p><code>src/main/webapp/WEB-INF/web.xml</code></p>

                    <div class="row">
                        <div class="col-md-offset-1">
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
                        <div class="col-md-offset-1">
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

                    <!--
                    #################################
                    section
                    #################################
                    -->
                    <!--<div id="section" role="tabpanel" class="tab-pane active">-->
                    <!--<h3>section</h3>-->
                    <!--</div>-->
                </div>
                <!-- .tab-content -->
            </div>
        </div>
    </div>
</div>

<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        ...
    </div>
</nav>

<script src="${ROOT}/resources/dist/vendor.js"></script>
<script src="${ROOT}/resources/dist/app.js"></script>
</body>
</html>