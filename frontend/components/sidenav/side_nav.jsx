import React from 'react';
import { Link, hashHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

const Nav = ({currentUser, sideDrawerOpen, closeSideDrawer, openSideDrawer}) => {
  const handleClick = (path) => {
    return (e) => {
      closeSideDrawer();
      hashHistory.push(path);
    };
  };
  return (
    <Drawer
      docked={false}
      width={250}
      open={sideDrawerOpen}
      onRequestChange={ sideDrawerOpen ? closeSideDrawer : openSideDrawer }
      >
    <AppBar
      title="bettergifts"
      titleStyle={{ fontFamily: 'Roboto Slab' }}
      showMenuIconButton={false}
      onTitleTouchTap={ () => {
        hashHistory.push("/");
        closeSideDrawer();
      }}
      />
      <Menu>
        <MenuItem leftIcon={<i className="material-icons">home</i>} primaryText="Home" onTouchTap={ handleClick("/") } />
        <MenuItem leftIcon={<i className="material-icons">list</i>} primaryText="My Wishlists" onTouchTap={ handleClick("/wishlists") } />
        <MenuItem leftIcon={<i className="material-icons">list</i>} primaryText="Friends Wishlists" onTouchTap={ handleClick("/friends-wishlists") } />
        <MenuItem leftIcon={<i className="material-icons">event</i>} primaryText="Upcoming Events" onTouchTap={ handleClick("/upcoming-wishlists") } />
        <MenuItem leftIcon={<i className="material-icons">people</i>} primaryText="Friends" onTouchTap={ handleClick("/friends") } />
        <MenuItem leftIcon={<i className="material-icons">search</i>} primaryText="Find Products" onTouchTap={ handleClick("/upcoming-wishlists") } />
        <MenuItem leftIcon={<i className="material-icons">shopping cart</i>} primaryText="Past Purchases" onTouchTap={ handleClick("/past-purchases") } />
        <Divider />
        <MenuItem primaryText="Facebook" onTouchTap={ closeSideDrawer } />
        <MenuItem primaryText="Pinterest" onTouchTap={ closeSideDrawer } />
        <MenuItem primaryText="Twitter" onTouchTap={ closeSideDrawer } />
      </Menu>
    </Drawer>
)};

export default Nav;
