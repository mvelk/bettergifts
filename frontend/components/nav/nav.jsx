import React from 'react';
import { Link, hashHistory } from 'react-router';
import { AppBar, FlatButton } from 'material-ui';

const Nav = ({currentUser, logout, openAuthModal, openSideDrawer}) => (
  <AppBar
    title="bettergifts"
    titleStyle={{ fontFamily: 'Roboto Slab' }}
    onLeftIconButtonTouchTap={openSideDrawer}
    onTitleTouchTap={() => hashHistory.push("/")}
    showMenuIconButton={typeof currentUser.username !== "undefined"}
    iconElementRight={typeof currentUser.username !== "undefined" ?
      <FlatButton onTouchTap={ logout } label="Logout"/> :
      <FlatButton onTouchTap={ openAuthModal } label="Login"/>}
  />

);

export default Nav;
