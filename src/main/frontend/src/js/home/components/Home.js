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
        <h3>
          src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/MailConfig.groovy
        </h3>
        <p>Uncomment <code>@Configuration</code>. Update SMTP hostname. Visit
          {' '} <a href="https://github.com/choonchernlim/spring-boot-mail">spring-boot-mail</a> to
          learn more about the usage.
        </p>
      </CardText>
    </Card>

    <h2>Additional Data Source</h2>

    <Card>
      <CardText>
        <h3>/path/to/choonchernlim-archetype-webapp.properties</h3>

        <p>Create an external properties file with the following content:-</p>

        <pre>
          {'\nsecondary.datasource.poolName=secondary'}
          {'\nsecondary.datasource.jdbcUrl=jdbc:h2:mem:test;MODE=MSSQLServer;DATABASE_TO_UPPER=false'}
          {'\nsecondary.datasource.username='}
          {'\nsecondary.datasource.password='}
          {'\nsecondary.datasource.connectionTestQuery=select 1'}
        </pre>

        <h3>SPRING_BOOT_PROPERTIES_DIR environment variable</h3>

        <p>If choonchernlim-archetype-webapp.properties is located under <code>/path/to</code>
          directory, create this environment variable with that value without trailing slash.
        </p>

        <h3>
          src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/SecondaryDataSourceLocalConfig.groovy
        </h3>

        <p>Uncomment <code>@Configuration</code>. Adjust configuration accordingly.</p>

        <h3>
          src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/SecondaryDataSourceMiddlewareConfig.groovy
        </h3>

        <p>Uncomment <code>@Configuration</code>.</p>

        <h3>src/main/resources/application-middleware.yml</h3>

        <p>Update secondary JNDI.</p>
      </CardText>
    </Card>

    <h2>Swagger UI</h2>

    <Card>
      <CardText>
        <h3>
          src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/web/api
        </h3>

        <p>Any Swagger-annotated Spring controllers under this package can be viewed
          at <a href="swagger-ui.html">/swagger-ui.html</a>.
        </p>
      </CardText>
    </Card>

  </Container>
);
/* eslint-enable max-len */

export default Radium(Home); // eslint-disable-line new-cap
