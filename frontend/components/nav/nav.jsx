import React from 'react';
import { Link, hashHistory } from 'react-router';
import { AppBar, FlatButton } from 'material-ui';

const Nav = ({currentUser, logout, handleOpen}) => (
  <AppBar
    title="betterGifts"
    titleStyle={
      { fontFamily: 'Roboto Slab' }
    }
    showMenuIconButton={typeof currentUser.username !== "undefined"}
    iconElementRight={typeof currentUser.username !== "undefined" ?
      <FlatButton onTouchTap={ logout } label="Logout"/> :
      <FlatButton onTouchTap={ handleOpen } label="Login"/>}
  />

);

export default Nav;
