import React from 'react';
import { Link, hashHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const twitterLink = "https://twitter.com/home?status=Don't%20be%20like%20Aunt%20Hilda.%20This%20year,%20give%20gifts%20that%20don't%20suck.%20Check%20out%20http%3A//www.bettergifts.xyz/%20to%20find%20out%20how.%20%23bettergifting";
const facebookLink = "https://www.facebook.com/sharer/sharer.php?u=http%3A//www.bettergifts.xyz/";
const Nav = ({currentUser, sideDrawerOpen, closeSideDrawer, openSideDrawer}) => {
  const handleShareLinks = (url) => {
    return(e) => {
      window.open(url, 'popUpWindow', 'height=400, width=600, left=10, top=10, scrollbars=yes, menubar=no');
    };
  };
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
        <MenuItem leftIcon={<i className="material-icons">list</i>} primaryText="My Wishlists" onTouchTap={ handleClick("/wishlists/0") } />
        <MenuItem leftIcon={<i className="material-icons">list</i>} primaryText="Friends Wishlists" onTouchTap={ handleClick("/wishlists/1") } />
        <MenuItem leftIcon={<i className="material-icons">event</i>} primaryText="Upcoming Events" onTouchTap={ handleClick("/wishlists/2") } />
        <MenuItem leftIcon={<i className="material-icons">search</i>} primaryText="Find Products" onTouchTap={ handleClick("/products") } />
        <MenuItem leftIcon={<i className="material-icons">shopping_cart</i>} primaryText="Purchases" onTouchTap={ handleClick("/purchases") } />
        <MenuItem leftIcon={<i className="material-icons">people</i>} primaryText="Manage Friends" onTouchTap={ handleClick("/friends") } />
        <Divider />
        <Subheader>Spread the Word</Subheader>
        <MenuItem primaryText="Facebook" onTouchTap={handleShareLinks(facebookLink)} />
        <MenuItem primaryText="Twitter" onTouchTap={handleShareLinks(twitterLink)} />
      </Menu>
    </Drawer>
  );
};

export default Nav;
