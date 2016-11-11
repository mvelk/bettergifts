import React from 'react';
import { Link, hashHistory } from 'react-router';
import { AppBar, FlatButton, Avatar, Badge, IconButton } from 'material-ui';

class Nav extends React.Component {
  constructor(props) {
    super(props);

  }



  navButton() {
    if (typeof this.props.currentUser.username !== "undefined") {
      return(
        <IconButton tooltip="Nav" onTouchTap={this.props.openSideDrawer}>
          <i className="material-icons md-light">menu</i>
        </IconButton>
      );
    } else {
      return "";
    }
  }

  sessionGroup() {
    if (typeof this.props.currentUser.username !== "undefined") {
      return(
        <div className="right-group">
          <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 20, right: 18}}
            >
              <IconButton tooltip="Notifications">
                <i className="material-icons md-light">notifications</i>
              </IconButton>
            </Badge>
          <FlatButton labelStyle={{color: 'white'}} onTouchTap={ this.props.logout } label="Logout"/>
        </div>
      );
    } else {
      return(
        <div className="rightGroup">
          <FlatButton labelStyle={{color: 'white'}} onTouchTap={ this.props.openAuthModal } label="Login"/>
        </div>
      );
    }
  }

  render() {
    return(
      <header className="app-header">
        <div className="left-group">
          {this.navButton()}
          <button className="home-button" onTouchTap={() => hashHistory.push("/")}>
            <h1>bettergifts</h1>
          </button>
        </div>

        {this.sessionGroup()}

      </header>
    );
  }

}

export default Nav;
