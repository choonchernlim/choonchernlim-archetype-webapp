import React from 'react';
import Container from '../../common/components/Container';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import { grey300 } from 'material-ui/lib/styles/colors';

const style = {
  card: {
    marginBottom: '2rem'
  },
  cardTitle: {
    backgroundColor: grey300
  }
};

/* eslint-disable max-len */
const Home = () => (
  <Container>
    <h1>Congratulations!</h1>

    <p>You have successfully created your first web application using {' '}
      <a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
      {' '} Maven Archetype!
    </p>

    <p>Some features as listed below are disabled by default to ensure you see this
      landing page. To enable them, please follow the instruction below.
    </p>

    <h2>Front End Stack</h2>


    <Card>
      <CardText>
        <p>This archetype uses <a href="https://github.com/choonchernlim/front-end-stack">front-end-stack</a>
          {' '} for client side development, which uses WebPack, React, Redux, Radium and
          ImmutableJS.
        </p>
      </CardText>
    </Card>


    <h2>Mock Files</h2>

    <Card>
      <CardText>
        There are several files created with <code>Mock</code> prefix (ex: {' '}
        <code>MockBean.java</code>, <code>MockConstant.java</code>, etc).
        They exist to retain the project structure. Thus, they can be deleted if you don't need
        them.
      </CardText>
    </Card>

    <h2>Hibernate</h2>

    <Card style={style.card}>
      <CardTitle title="<external-path>/jetty-env.xml" style={style.cardTitle} />
      <CardText>
        Create an external file outside the project called <code>jetty-env.xml</code> with the
        following lines:-

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
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle title="JETTY_ENV_XML environment variable" style={style.cardTitle} />
      <CardText>
        Create an environment variable called <code>JETTY_ENV_XML</code> pointing to
        <code>{'<external-path></external-path>/jetty-env.xml'}</code>.
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle title="WAR/pom.xml" style={style.cardTitle} />
      <CardText>
        Uncomment the following lines under Jetty Maven Plugin:-

        <pre>{'\n<jettyEnvXml>${env.JETTY_ENV_XML}</jettyEnvXml>'}</pre>
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle title="WAR/src/main/webapp/WEB-INF/web.xml" style={style.cardTitle} />
      <CardText>
        Uncomment the following lines:-

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

        <br />

        <p>Add JNDI resource reference.</p>

        <pre>
          {'\n<resource-ref>'}
          {'\n  <res-ref-name>jdbc/db</res-ref-name>'}
          {'\n  <res-type>javax.sql.DataSource</res-type>'}
          {'\n  <res-auth>Container</res-auth>'}
          {'\n  <res-sharing-scope>Shareable</res-sharing-scope>'}
          {'\n</resource-ref>'}
        </pre>
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle title="WAR/src/main/webapp/WEB-INF/ibm-web-bnd.xml" style={style.cardTitle} />
      <CardText>
        Add a new resource reference to bind the local JNDI to global JNDI. By doing
        this, the Middleware WAS admins do not need to manually configure the JNDI(s) during EAR
        deployment.

        <pre>
          {'<resource-ref name="jdbc/db" binding-name="jdbc/db"/>'}
        </pre>
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle
        title="WAR/src/main/resources/spring-datasource-jndi.xml"
        style={style.cardTitle}
      />
      <CardText>
        Add a JNDI data source pointing to your project database.

        <pre>{'<jee:jndi-lookup id="dataSource" jndi-name="java:comp/env/jdbc/db"/>'}</pre>
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle
        title="WAR/src/main/resources/spring-data.xml"
        style={style.cardTitle}
      />
      <CardText>
        Uncomment the whole file.

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
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle
        title="WAR/src/main/java/com/github/choonchernlim/choonchernlimArchetypeWebapp/entity"
        style={style.cardTitle}
      />
      <CardText>
        All Hibernate entities are placed in this package.
      </CardText>
    </Card>

    <h2>Spring Security</h2>

    <Card style={style.card}>
      <CardTitle title="WAR/src/main/webapp/WEB-INF/web.xml" style={style.cardTitle} />
      <CardText>
        Uncomment the following lines:-

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
      </CardText>
    </Card>

    <Card style={style.card}>
      <CardTitle title="WAR/src/main/resources/spring-security.xml" style={style.cardTitle} />
      <CardText>
        Uncomment the entire file. Tweak the configuration based on your project needs:-

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

export default Home;
