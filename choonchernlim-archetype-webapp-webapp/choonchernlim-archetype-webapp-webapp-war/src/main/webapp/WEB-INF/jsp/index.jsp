<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ROOT" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>choonchernlim-archetype-webapp</title>

    <link rel="icon" type="image/png" href="${ROOT}/resources/img/favicon.png"/>
    <link rel="stylesheet" href="${ROOT}/resources/css/app.min.css"/>
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
            <a class="navbar-brand" href="#">
                <img src="${ROOT}/resources/img/logo.png" style="float:left;margin: -4px 10px 0 0;"/>
                <span>choonchernlim-archetype-webapp</span>
            </a>
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
                        <a href="#mock-files" aria-controls="mock-files" role="tab">Mock Files</a>
                    </li>
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
                <h2>Congratulations!</h2>
            </div>

            <p class="lead">You have successfully created your first web application using <a
                    href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
                Maven Archetype!
            </p>

            <p class="lead">Some features as listed below are disabled by default to ensure you see this landing page.
                To enable
                them, please follow the instruction below.
            </p>

            <hr/>

            <div class="tab-content">
                <!--
                #################################
                Hibernate
                #################################
                -->
                <div id="mock-files" role="tabpanel" class="tab-pane active">
                    <h3>Mock Files</h3>

                    <div class="row">
                        <div class="col-md-offset-1 col-md-10">
                            <p>There are several files created with <code>Mock</code> prefix (ex:
                                <code>MockBean.java</code>, <code>MockConstant.java</code>, etc).
                                These mock files are created to retain the project structure.
                                They can be deleted if you don't need them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--
            #################################
            Hibernate
            #################################
            -->
            <div id="hibernate" role="tabpanel" class="tab-pane active">
                <h3>Hibernate</h3>

                <p><code>&lt;external-path&gt;/jetty-env.xml</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Create an external file outside the project called <code>jetty-env.xml</code> with the
                            following lines:-</p>

<pre>
&lt;?xml version="1.0"?&gt;
&lt;!DOCTYPE Configure PUBLIC "-//Mort Bay Consulting//DTD Configure//EN" "http://jetty.mortbay.org/configure.dtd"&gt;
&lt;Configure class="org.eclipse.jetty.webapp.WebAppContext"&gt;
	&lt;Call name="setAttribute"&gt;
		&lt;Arg&gt;org.eclipse.jetty.server.webapp.WebInfIncludeJarPattern&lt;/Arg&gt;
		&lt;Arg/&gt;
	&lt;/Call&gt;
	&lt;New id="spacegoggle" class="org.eclipse.jetty.plus.jndi.Resource"&gt;
		&lt;Arg&gt;jdbc/db&lt;/Arg&gt;
		&lt;Arg&gt;
			&lt;New class="..."&gt;
				&lt;Set name="Url"&gt;...&lt;/Set&gt;
				&lt;Set name="User"&gt;...&lt;/Set&gt;
				&lt;Set name="Password"&gt;...&lt;/Set&gt;
			&lt;/New&gt;
		&lt;/Arg&gt;
	&lt;/New&gt;
&lt;/Configure&gt;
</pre>
                    </div>
                </div>

                <p><code>JETTY_ENV_XML environment variable</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Create an environment variable called <code>JETTY_ENV_XML</code> pointing to
                            <code>&lt;external-path&gt;/jetty-env.xml</code>.</p>
                    </div>
                </div>

                <p><code>pom.xml</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Uncomment the following lines under Jetty Maven Plugin:-</p>

<pre>
&lt;jettyEnvXml&gt;\${env.JETTY_ENV_XML}&lt;/jettyEnvXml&gt;
</pre>
                    </div>
                </div>

                <p><code>src/main/webapp/WEB-INF/web.xml</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Uncomment the following lines:-</p>

<pre>
&lt;filter&gt;
    &lt;filter-name&gt;openEntityManagerInViewFilter&lt;/filter-name&gt;
    &lt;filter-class&gt;org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter&lt;/filter-class&gt;
&lt;/filter&gt;
...
&lt;filter-mapping&gt;
    &lt;filter-name&gt;openEntityManagerInViewFilter&lt;/filter-name&gt;
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
                    <div class="col-md-offset-1 col-md-10">
                        <p>Add a new resource reference to bind the local JNDI to global JNDI. By doing
                            this, the
                            Middleware WAS
                            admins do not need to manually configure the JNDI(s) when deploying a brand new
                            EAR file
                            through
                            Middleware WAS Dashboard.</p>

<pre>
&lt;resource-ref name="jdbc/db" binding-name="jdbc/db"/&gt;
</pre>
                    </div>
                </div>

                <p><code>src/main/resources/spring-datasource-jndi.xml</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Add a JNDI data source pointing to your project database.</p>

<pre>
&lt;jee:jndi-lookup id="dataSource" jndi-name="java:comp/env/jdbc/db"/&gt;
</pre>
                    </div>
                </div>

                <p><code>src/main/resources/spring-data.xml</code></p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>Uncomment the whole file.</p>

                        <p>Change Hibernate dialect to match your database type.</p>

<pre>
&lt;bean id="entityManagerFactory" class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean"&gt;
    &lt;property name="dataSource" ref="dataSource"/&gt;
    &lt;property name="packagesToScan" value="com.github.choonchernlim.choonchernlimArchetypeWebapp.entity"/&gt;
    &lt;property name="jpaVendorAdapter"&gt;
        &lt;bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter"/&gt;
    &lt;/property&gt;
    &lt;property name="jpaProperties"&gt;
        &lt;props&gt;
            <strong>&lt;prop key="hibernate.dialect"&gt;org.hibernate.dialect.SQLServerDialect&lt;/prop&gt;</strong>
            &lt;prop key="hibernate.show_sql"&gt;false&lt;/prop&gt;
            &lt;prop key="hibernate.format_sql"&gt;false&lt;/prop&gt;

            &lt;!--
            Instead of defining @Type(type="org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime") on
            all Joda Time object, auto register the user type
            --&gt;
            &lt;prop key="jadira.usertype.autoRegisterUserTypes"&gt;true&lt;/prop&gt;
            &lt;!--
            This is important for H2 to work with Hibernate. If this is not specified, then the `dbo` has to be
            specified at domain classes, like this: `@Table(name = "dbo.domain")`.
            --&gt;
            &lt;prop key="hibernate.default_schema"&gt;dbo&lt;/prop&gt;
        &lt;/props&gt;
    &lt;/property&gt;
&lt;/bean&gt;
</pre>
                    </div>
                </div>

                <p><code>src/main/java/com/github/choonchernlim/choonchernlimArchetypeWebapp/entity</code>
                </p>

                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <p>All Hibernate entities are placed in this package.</p>
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
                    <div class="col-md-offset-1 col-md-10">
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
                    <div class="col-md-offset-1 col-md-10">
                        <p>Uncomment the entire file. Tweak the configuration based on your project
                            needs.</p>

<pre>
&lt;security:http pattern="/resources/**" security="none"/&gt;

&lt;security:http entry-point-ref="authenticationEntryPoint"&gt;
&lt;security:form-login login-page="/login"
                    authentication-failure-url="/login?login_error=1"
                    default-target-url="/"
                    always-use-default-target="true"/&gt;
	&lt;security:logout success-handler-ref="logoutSuccessHandler"/&gt;

	&lt;security:intercept-url pattern="/" access="permitAll"/&gt;
	&lt;security:intercept-url pattern="/**" access="ROLE_USER"/&gt;
&lt;/security:http&gt;

&lt;bean id="authenticationEntryPoint" class="org.springframework.security.web.authentication.Http403ForbiddenEntryPoint"/&gt;

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
        <p class="navbar-text">Powered by
            <a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
            Maven Archetype.</p>
    </div>
</nav>

<script src="${ROOT}/resources/js/vendor.min.js"></script>
<script src="${ROOT}/resources/js/app.min.js"></script>
</body>
</html>