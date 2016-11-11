import React from 'react';
import { Link, hashHistory } from 'react-router';
import { AppBar, FlatButton, Avatar, Badge, IconButton, Menu, MenuItem } from 'material-ui';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import PendingRequestItem from '../friends/pending_request_item';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleNotificationsTap = this.handleNotificationsTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleNotificationsTap(e) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
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
      if (this.props.pendingRequests.length > 0) {
        return(
          <div className="right-group">

            <Badge
              badgeContent={this.props.pendingRequests.length}
              secondary={true}
              badgeStyle={{top: 20, right: 18}}>
              <IconButton tooltip="Notifications" onTouchTap={this.handleNotificationsTap}>
                <i className="material-icons md-light">notifications</i>
              </IconButton>
            </Badge>

            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
              style={{width: '600'}}
            >
              <div className="friends-index-content-container">
                {this.props.pendingRequests.map((pendingFriend) => (
                  <PendingRequestItem
                    pendingFriend={pendingFriend}
                    acceptFriendRequest={this.props.acceptFriendRequest}
                    rejectFriendRequest={this.props.rejectFriendRequest}
                    key={pendingFriend.id} />
                ))}
              </div>

            </Popover>

            <FlatButton labelStyle={{color: 'white'}} onTouchTap={ this.props.logout } label="Logout"/>
          </div>
        );
      } else {
        return(
          <div className="right-group">
            <IconButton tooltip="Notifications">
              <i className="material-icons md-light">notifications</i>
            </IconButton>
            <FlatButton labelStyle={{color: 'white'}} onTouchTap={ this.props.logout } label="Logout"/>
          </div>
        );
      }
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
