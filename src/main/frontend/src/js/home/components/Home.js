import React from 'react';
import Radium, { Style } from 'radium';
import Container from '../../common/components/Container';
import { Card, CardText } from 'material-ui/Card';
import { grey600 } from 'material-ui/styles/colors';

/* eslint-disable max-len */
const Home = () => (
  <Container>
    <Style
      rules={{
        pre: {
          fontSize: '0.8rem',
          color: grey600,
          marginBottom: '2rem'
        }
      }}
    />

    <h1>Congratulations!</h1>

    <p>You have successfully created your a web application using {' '}
      <a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
      {' '} Maven Archetype!
    </p>

    <p>Some features are disabled by default to ensure you see this landing page. To enable them,
      please follow the instruction below.
    </p>

    <h2>Front End Stack</h2>

    <Card>
      <CardText>
        <p>This archetype uses <a href="https://github.com/choonchernlim/front-end-stack">front-end-stack</a>
          {' '} for client side development, which uses Webpack, React, Redux, Radium and
          ImmutableJS.
        </p>
      </CardText>
    </Card>

    <h2>Email Module</h2>

    <Card>
      <CardText>
        <p>To enable email module, uncomment <code>MailConfig.groovy</code> under <code>com.github.choonchernlim.choonchernlimArchetypeWebapp.config</code>
          {' '} package and specify the SMTP hostname.
        </p>

        <p>Visit <a href="https://github.com/choonchernlim/spring-boot-mail">spring-boot-mail</a> to
          learn more about the usage.
        </p>
      </CardText>
    </Card>

    <h2>Swagger UI</h2>

    <Card>
      <CardText>
        <p>Any Swagger-annotated Spring controllers under <code>com.github.choonchernlim.choonchernlimArchetypeWebapp.web.api</code>
          {' '} package can be viewed at <a href="swagger-ui.html">/swagger-ui.html</a>.
        </p>
      </CardText>
    </Card>

    <h2>Hibernate</h2>

    <Card>
      <CardText>
        <h3>&lt;external-path&gt;/jetty-env.xml</h3>

        <p>Create an external file outside the project called <code>jetty-env.xml</code> with the
          following lines:-
        </p>

        <pre>
          {'\n<?xml version="1.0"?>'}
          {'\n<!DOCTYPE Configure PUBLIC "-//Jetty//Configure//EN" "http://www.eclipse.org/jetty/configure.dtd">'}
          {'\n<Configure class="org.eclipse.jetty.webapp.WebAppContext">'}
          {'\n  <Call name="setAttribute">'}
          {'\n    <Arg>org.eclipse.jetty.server.webapp.WebInfIncludeJarPattern</Arg>'}
          {'\n    <Arg/>'}
          {'\n  </Call>'}
          {'\n  <New id="spacegoggle" class="org.eclipse.jetty.plus.jndi.Resource">'}
          {'\n    <Arg>jdbc/db</Arg>'}
          {'\n    <Arg>'}
          {'\n      <New class="...">'}
          {'\n        <Set name="Url">...</Set>'}
          {'\n        <Set name="User">...</Set>'}
          {'\n        <Set name="Password">...</Set>'}
          {'\n      </New>'}
          {'\n    </Arg>'}
          {'\n  </New>'}
          {'\n</Configure>'}
        </pre>

        <h3>JETTY_ENV_XML environment variable</h3>

        <p>Create an environment variable called <code>JETTY_ENV_XML</code> pointing to
          <code>{' <external-path>/jetty-env.xml'}</code>.
        </p>

        <h3>WAR/pom.xml</h3>
        <p>Uncomment the following lines under Jetty Maven Plugin:-
        </p>

        <pre>{'\n<jettyEnvXml>${env.JETTY_ENV_XML}</jettyEnvXml>'}</pre>

        <h3>WAR/src/main/webapp/WEB-INF/web.xml</h3>

        <p>Uncomment the following lines:-</p>

        <pre>
          {'\n<filter>'}
          {'\n  <filter-name>openEntityManagerInViewFilter</filter-name>'}
          {'\n  <filter-class>org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter</filter-class>'}
          {'\n</filter>'}
          {'\n...'}
          {'\n<filter-mapping>'}
          {'\n  <filter-name>openEntityManagerInViewFilter</filter-name>'}
          {'\n  <url-pattern>/*</url-pattern>'}
          {'\n</filter-mapping>'}
        </pre>

        <p>Add JNDI resource reference.</p>

        <pre>
          {'\n<resource-ref>'}
          {'\n  <res-ref-name>jdbc/db</res-ref-name>'}
          {'\n  <res-type>javax.sql.DataSource</res-type>'}
          {'\n  <res-auth>Container</res-auth>'}
          {'\n  <res-sharing-scope>Shareable</res-sharing-scope>'}
          {'\n</resource-ref>'}
        </pre>

        <h3>WAR/src/main/webapp/WEB-INF/ibm-web-bnd.xml</h3>
        <p>Add a new resource reference to bind the local JNDI to global JNDI. By doing
          this, the Middleware WAS admins do not need to manually configure the JNDI(s) during EAR
          deployment.
        </p>
        <pre>{'<resource-ref name="jdbc/db" binding-name="jdbc/db"/>'}</pre>


        <h3>WAR/src/main/resources/spring-datasource-jndi.xml</h3>
        <p>Add a JNDI data source pointing to your project database.</p>

        <pre>{'<jee:jndi-lookup id="dataSource" jndi-name="java:comp/env/jdbc/db"/>'}</pre>

        <h3>WAR/src/main/resources/spring-data.xml</h3>
        <p>Uncomment the whole file.</p>
        <p>Change Hibernate dialect to match your database type.</p>

        <pre>
          {'\n<bean id="entityManagerFactory" class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">'}
          {'\n  <property name="dataSource" ref="dataSource"/>'}
          {'\n  <property name="packagesToScan" value="com.github.choonchernlim.choonchernlimArchetypeWebapp.entity"/>'}
          {'\n  <property name="jpaVendorAdapter">'}
          {'\n    <bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter"/>'}
          {'\n  </property>'}
          {'\n  <property name="jpaProperties">'}
          {'\n  <props>'}
          <strong>
            {'\n      <prop key="hibernate.dialect">org.hibernate.dialect.SQLServerDialect</prop>'}
          </strong>
          {'\n      <prop key="hibernate.order_updates">true</prop>'}
          {'\n      <prop key="hibernate.show_sql">false</prop>'}
          {'\n      <prop key="hibernate.format_sql">false</prop>'}
          {'\n      <prop key="jadira.usertype.autoRegisterUserTypes">true</prop>'}
          {'\n      <prop key="hibernate.default_schema">dbo</prop>'}
          {'\n    </props>'}
          {'\n  </property>'}
          {'\n</bean>'}
        </pre>

        <h3>WAR/src/main/java/com/github/choonchernlim/choonchernlimArchetypeWebapp/entity</h3>
        <p>All Hibernate entities are placed in this package.</p>
      </CardText>
    </Card>


    <h2>Spring Security</h2>

    <Card>
      <CardText>
        <h3>WAR/src/main/webapp/WEB-INF/web.xml</h3>
        <p>Uncomment the following lines:-</p>

        <pre>
          {'\n<filter>'}
          {'\n  <filter-name>springSecurityFilterChain</filter-name>'}
          {'\n  <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>'}
          {'\n</filter>'}
          {'\n...'}
          {'\n<filter-mapping>'}
          {'\n  <filter-name>springSecurityFilterChain</filter-name>'}
          {'\n  <url-pattern>/*</url-pattern>'}
          {'\n</filter-mapping>'}
        </pre>

        <h3>WAR/src/main/resources/spring-security.xml</h3>
        <p>Uncomment the entire file. Tweak the configuration based on your project needs:-
        </p>

        <pre>
          {'\n<security:http pattern="/resources/**" security="none"/>'}
          {'\n '}
          {'\n<security:http entry-point-ref="authenticationEntryPoint">'}
          {'\n  <security:form-login login-page="/login"'}
          {'\n    authentication-failure-url="/login?login_error=1"'}
          {'\n    default-target-url="/"'}
          {'\n    always-use-default-target="true"/>'}
          {'\n  <security:logout success-handler-ref="logoutSuccessHandler"/>'}
          {'\n '}
          {'\n  <security:intercept-url pattern="/" access="permitAll"/>'}
          {'\n  <security:intercept-url pattern="/**" access="ROLE_USER"/>'}
          {'\n</security:http>'}
          {'\n '}
          {'\n<bean id="authenticationEntryPoint" class="org.springframework.security.web.authentication.Http403ForbiddenEntryPoint"/>'}
          {'\n '}
          {'\n<bean id="customAuthenticationProvider" class="..."/>'}
          {'\n '}
          {'\n<security:authentication-manager>'}
          {'\n  <security:authentication-provider ref="customAuthenticationProvider"/>'}
          {'\n</security:authentication-manager>'}
        </pre>

      </CardText>
    </Card>

  </Container>
);
/* eslint-enable max-len */

export default Radium(Home); // eslint-disable-line new-cap
