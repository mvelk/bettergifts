import React from 'react';
import { Link, hashHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

const Nav = ({currentUser, sideDrawerOpen, closeSideDrawer, openSideDrawer}) => (
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
      <MenuItem leftIcon={<i className="material-icons">home</i>} primaryText="Home" onTouchTap={ closeSideDrawer } />
      <MenuItem leftIcon={<i className="material-icons">list</i>} primaryText="Wish Lists" onTouchTap={ closeSideDrawer } />
      <MenuItem leftIcon={<i className="material-icons">event</i>} primaryText="Events" onTouchTap={ closeSideDrawer } />
      <MenuItem leftIcon={<i className="material-icons">people</i>} primaryText="Friends" onTouchTap={ closeSideDrawer } />
      <MenuItem leftIcon={<i className="material-icons">search</i>} primaryText="Find Products" onTouchTap={ closeSideDrawer } />
      <MenuItem leftIcon={<i className="material-icons">shopping cart</i>} primaryText="Past Purchases" onTouchTap={ closeSideDrawer } />
      <Divider />
      <MenuItem primaryText="Facebook" onTouchTap={ closeSideDrawer } />
      <MenuItem primaryText="Pinterest" onTouchTap={ closeSideDrawer } />
      <MenuItem primaryText="Twitter" onTouchTap={ closeSideDrawer } />
    </Menu>
  </Drawer>
);

export default Nav;
