// @flow
import React from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import BugReportIcon from 'material-ui/svg-icons/action/bug-report';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import MoodIcon from 'material-ui/svg-icons/social/mood';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import styles from '../styles';

type Props = {
  open: boolean,
  router: Object
};

const MenuNavigation = ({ open, router }: Props) => {
  const push: Function = path => () => router.push(path);

  return (
    <Drawer open={open} containerStyle={styles.layout.leftNav}>
      <MenuItem onTouchTap={push('/')} leftIcon={<HomeIcon />}>Home</MenuItem>

      <MenuItem href="/swagger-ui.html" leftIcon={<DescriptionIcon />}>Swagger</MenuItem>

      <MenuItem onTouchTap={push('chuck-norris')} leftIcon={<MoodIcon />}>Chuck Norris</MenuItem>

      <MenuItem
        onTouchTap={push('todo-manager')}
        leftIcon={<AssignmentIcon />}
      >Todo Manager</MenuItem>

      <Divider />

      <Subheader>External Links</Subheader>

      <MenuItem
        href="https://github.com/choonchernlim/choonchernlim-archetype-webapp"
        leftIcon={<BugReportIcon />}
      >GitHub
      </MenuItem>

      <MenuItem
        href="https://myshittycode.com/"
        leftIcon={<SchoolIcon />}
      >My Shitty Code
      </MenuItem>
    </Drawer>
  );
};

export default withRouter(MenuNavigation);
