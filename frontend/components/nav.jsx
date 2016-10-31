import React from 'react';
import { Link } from 'react-router';
import { AppBar, FlatButton } from 'material-ui';
const Nav = ({currentUser, logout}) => (
  <AppBar
    title="bettergifts"
    showMenuIconButton={typeof currentUser.username !== "undefined"}
    iconElementRight={<FlatButton label="Login / Sign Up"/>}
  />
);

export default Nav;
