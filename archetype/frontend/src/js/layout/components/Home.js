// @flow
import React, { type Element } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Radio from 'material-ui/Radio';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import styles from '../styles';
import { url } from '../../app/utils/url-helper';

// non-existence URI to simulate 404
const invalidUrl: string = url('/invalid');

// server-side URI that throws purposely throw an error to simulate 500
const exceptionUrl: string = url('/test/throw-exception');

const SwitchOn = () => (
  <FormControlLabel label="ENABLED BY DEFAULT" control={<Switch checked />} />
);

const SwitchOff = () => (
  <FormControlLabel label="DISABLED BY DEFAULT" control={<Switch checked={false} />} />
);

type CustomListItemProps = {
  children: any,
};

const CustomListItem = ({ children }: CustomListItemProps) => (
  <ListItem>
    <ListItemIcon><ChevronRightIcon /></ListItemIcon>
    <ListItemText
      primary={<div>{children}</div>}
    />
  </ListItem>
);

type CustomLinkProps = {
  href: string,
  children: any,
};

const CustomLink = ({ href, children }: CustomLinkProps) => (
  <Button color="primary" component="a" dense href={href}>{children}</Button>
);

type Props = {
  classes: Object,
};

const Home = ({ classes }: Props): Element<*> => (
  <div>
    <Typography type="display2">Welcome!</Typography>

    <Typography>You have successfully created your a web application using {' '}
      <CustomLink href="https://github.com/choonchernlim/choonchernlim-archetype-webapp">
        choonchernlim-archetype-webapp
      </CustomLink> Maven Archetype!
    </Typography>

    <Typography>Some features are disabled by default to ensure you see this landing page. See below
      for more info.
    </Typography>
    <br />

    <Typography type="display1">Front End Stack</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography>This app uses {' '}
        <CustomLink href="https://github.com/choonchernlim/front-end-stack">
          front-end-stack
        </CustomLink> for client side development, which uses Webpack, React, Redux and ImmutableJS.
      </Typography>
    </Paper>


    <Typography type="display1">Spring Profiles</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography>This app is preconfigured with 3 Spring Profiles:-</Typography>

      <List>
        <CustomListItem>
          <code>middleware</code> (default): For generated WAR deployed in Middleware servers
          using JNDI data source. This is the default profile
          if <code>spring.profiles.active</code> is not specified.
        </CustomListItem>
        <CustomListItem>
          <code>local</code>: For local development using H2 data source.
        </CustomListItem>
        <CustomListItem>
          <code>test</code>: For running test cases.
        </CustomListItem>
      </List>
    </Paper>


    <Typography type="display1">Error Handling</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography>The client-side determines the appropriate views based on the non-REST errors.
      </Typography>

      <List>
        <CustomListItem>
          404 errors redirects to <code>/error/page-not-found</code> ( try it:
          <CustomLink href={invalidUrl}>{invalidUrl}</CustomLink> ).
        </CustomListItem>
        <CustomListItem>
          Non-200 errors redirects to <code>/error/unexpected</code> ( try it:
          <CustomLink href={exceptionUrl}>{exceptionUrl}</CustomLink> ).
        </CustomListItem>
      </List>
    </Paper>


    <Typography type="display1">Primary Data Source</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/PrimaryDataSourceLocalConfig.groovy
      </Typography>

      <Typography>
        When using <code>local</code> Spring profile, H2 database is used.
      </Typography>
      <br />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/PrimaryDataSourceMiddlewareConfig.groovy
      </Typography>

      <Typography>
        When using <code>middleware</code> Spring profile, JNDI data source is used.
      </Typography>
      <br />

      <Typography type="body2">src/main/resources/application-middleware.yml</Typography>

      <Typography>
        Update primary JNDI name.
      </Typography>
      <br />
    </Paper>


    <Typography type="display1">Secondary Data Source</Typography>

    <Paper className={classes.paper}>
      <SwitchOff />

      <Typography type="body2">/path/to/choonchernlim-archetype-webapp.properties</Typography>

      <Typography>
        Create an external properties file with the following content:-
      </Typography>

      <Typography>
        <code>secondary.datasource.poolName=secondary</code>
        <br />
        <code>
          secondary.datasource.jdbcUrl=jdbc:h2:mem:test;MODE=MSSQLServer;DATABASE_TO_UPPER=false
        </code>
        <br /><code>secondary.datasource.username=</code>
        <br /><code>secondary.datasource.password=</code>
        <br /><code>secondary.datasource.connectionTestQuery=select 1</code>
      </Typography>
      <br />

      <Typography type="body2">SPRING_BOOT_PROPERTIES_DIR environment variable</Typography>

      <Typography>
        If choonchernlim-archetype-webapp.properties is located under <code>/path/to</code>
        {' '} directory, create this environment variable with that value without
        trailing slash.
      </Typography>
      <br />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/SecondaryDataSourceLocalConfig.groovy
      </Typography>

      <Typography>
        Uncomment <code>@Configuration</code>. Adjust configuration accordingly.
      </Typography>
      <br />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/SecondaryDataSourceMiddlewareConfig.groovy
      </Typography>

      <Typography>
        Uncomment <code>@Configuration</code>.
      </Typography>
      <br />

      <Typography type="body2">src/main/resources/application-middleware.yml</Typography>

      <Typography paragraph>
        Update secondary JNDI name.
      </Typography>
      <br />
    </Paper>


    <Typography type="display1">Swagger UI</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/web/api
      </Typography>

      <Typography>
        Any Swagger-annotated Spring controllers under this package can be viewed at
        <CustomLink href="swagger-ui.html">/swagger-ui.html</CustomLink>.
      </Typography>
      <br />
    </Paper>


    <Typography type="display1">Email</Typography>

    <Paper className={classes.paper}>
      <SwitchOff />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/MailConfig.groovy
      </Typography>

      <Typography>
        Uncomment <code>@Configuration</code>. Update SMTP hostname. Visit
        <CustomLink href="https://github.com/choonchernlim/spring-boot-mail">
          spring-boot-mail
        </CustomLink> to learn more about the usage.
      </Typography>
      <br />
    </Paper>


    <Typography type="display1">Security</Typography>

    <Paper className={classes.paper}>
      <SwitchOn />

      <Typography type="body2">
        src/main/groovy/[BASE_PACKAGE]/config/SecurityConfig.groovy
      </Typography>

      <Typography>This app is preconfigured to prevent:-</Typography>

      <List>
        <CustomListItem>
          <CustomLink
            href="https://myshittycode.com/2017/08/31/jee-security-preventing-clickjacking-attacks/"
          >
            Clickjacking attacks
          </CustomLink> by
          setting <code>X-FRAME-OPTIONS</code> response header to <code>DENY</code>.
        </CustomListItem>
        <CustomListItem>
          <CustomLink
            href="https://myshittycode.com/2017/08/31/jee-security-disabling-http-options-method/"
          >
            XST attacks
          </CustomLink> by disabling OPTIONS HTTP method.
        </CustomListItem>
      </List>
    </Paper>


    <Typography type="display1">Look and Feel</Typography>

    <Paper className={classes.paper}>
      <Typography type="display3">Display 3</Typography>
      <Typography type="display2">Display 2</Typography>
      <Typography type="display1">Display 1</Typography>
      <Typography type="body2">Body 2</Typography>
      <Typography>Body 1</Typography>

      <br /><br />

      <TextField className={classes.textField} label="Default" value="test" />
      <TextField className={classes.textField} label="Disabled" value="test" disabled />
      <TextField className={classes.textField} label="Error" value="test" error />

      <br /><br />

      <Button className={classes.button} raised color="primary">Primary Button</Button>
      <Button className={classes.button} raised color="accent">Secondary Button</Button>
      <Button className={classes.button} raised>Default Button</Button>
      <Button className={classes.button} raised disabled>Disabled Button</Button>

      <br /><br />

      <FormControlLabel label="Unchecked Checkbox" control={<Checkbox />} />
      <FormControlLabel label="Checked Checkbox" control={<Checkbox checked />} />
      <FormControlLabel label="Disabled Checkbox" control={<Checkbox disabled />} />

      <br /><br />

      <FormControlLabel label="Unchecked Radio" control={<Radio />} />
      <FormControlLabel label="Checked Radio" control={<Radio checked />} />
      <FormControlLabel label="Disabled Radio" control={<Radio disabled />} />
    </Paper>
  </div>
);

export default withStyles(styles.home)(Home);
