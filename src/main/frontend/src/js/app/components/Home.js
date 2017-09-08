// @flow
import React from 'react';
import Radium, { Style } from 'radium';
import { green200, green600, grey600, red200, red600 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import Container from '../../app/components/Container';
import { url } from '../../app/utils/url-helper';
import styles from '../styles';

// non-existence URI to simulate 404
const invalidUrl: string = url('/invalid');

// server-side URI that throws purposely throw an error to simulate 500
const exceptionUrl: string = url('/test/throw-exception');

const ToggleOn = () => (
  <Toggle
    label="ENABLED BY DEFAULT"
    labelPosition="right"
    toggled
    thumbSwitchedStyle={{ backgroundColor: green600 }}
    trackSwitchedStyle={{ backgroundColor: green200 }}
    labelStyle={{ color: green600 }}
  />
);

const ToggleOff = () => (
  <Toggle
    label="DISABLED BY DEFAULT"
    labelPosition="right"
    toggled
    thumbSwitchedStyle={{ backgroundColor: red600 }}
    trackSwitchedStyle={{ backgroundColor: red200 }}
    labelStyle={{ color: red600 }}
  />
);

/* eslint-disable max-len */
const Home = () => (
  <Container>
    <Style
      rules={{
        pre: {
          fontSize: '0.8rem',
          color: grey600,
          marginBottom: '2rem',
        },
      }}
    />

    <h1>Congratulations!</h1>

    <p>You have successfully created your a web application using {' '}
      <a href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">choonchernlim-archetype-webapp</a>
      {' '} Maven Archetype!
    </p>

    <p>Some features are disabled by default to ensure you see this landing page. See below for more
      info.
    </p>

    <h2>Front End Stack</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <p>This app uses {' '}
        <a
          href="https://github.com/choonchernlim/front-end-stack"
        >front-end-stack</a> for client side development, which uses Webpack, React, Redux and
        ImmutableJS.
      </p>
    </Paper>

    <h2>Spring Profiles</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <p>This app is preconfigured with 3 Spring Profiles:-</p>

      <ul>
        <li><code>middleware</code> (default): For generated WAR deployed in Middleware servers
          using JNDI data source. This is the default profile
          if <code>spring.profiles.active</code> is not specified.
        </li>
        <li><code>local</code>: For local development using H2 data source.</li>
        <li><code>test</code>: For running test cases.</li>
      </ul>
    </Paper>

    <h2>Error Handling</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <p>The client-side determines the appropriate views based on the non-REST errors.
      </p>

      <ul>
        <li>404 errors redirects to <code>/error/page-not-found</code> ( try it:
          {' '}<a href={invalidUrl}>{invalidUrl}</a> ).
        </li>
        <li>Non-200 errors redirects to <code>/error/unexpected</code> ( try it:
          {' '}<a href={exceptionUrl}>{exceptionUrl}</a> ).
        </li>
      </ul>
    </Paper>

    <h2>Email</h2>

    <Paper style={styles.home.paper}>
      <ToggleOff />

      <h3>
        src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/MailConfig.groovy
      </h3>
      <p>Uncomment <code>@Configuration</code>. Update SMTP hostname. Visit
        {' '} <a href="https://github.com/choonchernlim/spring-boot-mail">spring-boot-mail</a> to
        learn more about the usage.
      </p>
    </Paper>

    <h2>Security</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <h3>
        src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/SecurityConfig.groovy
      </h3>
      <p>This app is preconfigured to prevent:-</p>
      <ul>
        <li>
          <a
            href="https://myshittycode.com/2017/08/31/jee-security-preventing-clickjacking-attacks/"
          >Clickjacking attacks</a> by setting <code>X-FRAME-OPTIONS</code> response header
          to <code>DENY</code>.
        </li>
        <li>
          <a
            href="https://myshittycode.com/2017/08/31/jee-security-disabling-http-options-method/"
          >XST attacks</a> by disabling OPTIONS HTTP method.
        </li>
      </ul>
    </Paper>

    <h2>Primary Data Source</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <h3>
        src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/PrimaryDataSourceLocalConfig.groovy
      </h3>

      <p>When using <code>local</code> Spring profile, H2 database is used.</p>

      <h3>
        src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/config/PrimaryDataSourceMiddlewareConfig.groovy
      </h3>

      <p>When using <code>middleware</code> Spring profile, JNDI data source is used.</p>

      <h3>src/main/resources/application-middleware.yml</h3>

      <p>Update primary JNDI name.</p>
    </Paper>

    <h2>Secondary Data Source</h2>

    <Paper style={styles.home.paper}>
      <ToggleOff />

      <h3>/path/to/choonchernlim-archetype-webapp.properties</h3>

      <p>Create an external properties file with the following content:-</p>

      <code>secondary.datasource.poolName=secondary</code>
      <br /><code>secondary.datasource.jdbcUrl=jdbc:h2:mem:test;MODE=MSSQLServer;DATABASE_TO_UPPER=false</code>
      <br /><code>secondary.datasource.username=</code>
      <br /><code>secondary.datasource.password=</code>
      <br /><code>secondary.datasource.connectionTestQuery=select 1</code>

      <h3>SPRING_BOOT_PROPERTIES_DIR environment variable</h3>

      <p>If choonchernlim-archetype-webapp.properties is located under <code>/path/to</code>
        {' '} directory, create this environment variable with that value without trailing slash.
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

      <p>Update secondary JNDI name.</p>
    </Paper>

    <h2>Swagger UI</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <h3>
        src/main/groovy/com/github/choonchernlim/choonchernlimArchetypeWebapp/web/api
      </h3>

      <p>Any Swagger-annotated Spring controllers under this package can be viewed
        at <a href="swagger-ui.html">/swagger-ui.html</a>.
      </p>
    </Paper>

    <h2>Look and Feel</h2>

    <Paper style={styles.home.paper}>
      <ToggleOn />

      <p><a href="#link">This is a link</a>. <strong>This is a strong text</strong>.</p>

      <h1>Heading 1</h1>

      <h2>Heading 2</h2>

      <h3>Heading 3</h3>

      <TextField hintText="Text Field" style={styles.home.textField} />
      {' '}
      <TextField hintText="Disabled Text Field" disabled style={styles.home.textField} />
      {' '}
      <TextField
        hintText="Error Text Field"
        errorText="Required field"
        style={styles.home.textField}
      />

      <br /><br />

      <RaisedButton label="Primary Button" primary style={styles.home.button} />
      {' '}
      <RaisedButton label="Secondary Button" secondary style={styles.home.button} />
      {' '}
      <RaisedButton label="Default Button" style={styles.home.button} />
      {' '}
      <RaisedButton label="Disabled Button" disabled style={styles.home.button} />

      <br /><br />

      <Checkbox label="Unchecked Checkbox" />
      {' '}
      <Checkbox label="Checked Checkbox" defaultChecked />
      {' '}
      <Checkbox label="Disabled Checkbox" disabled />

      <br /><br />

      <RadioButton label="Unchecked Radio Button" />
      {' '}
      <RadioButton label="Checked Radio Button" checked />
      {' '}
      <RadioButton label="Disabled Radio Button" disabled />
    </Paper>

  </Container>
);
/* eslint-enable max-len */

export default Radium(Home); // eslint-disable-line new-cap
