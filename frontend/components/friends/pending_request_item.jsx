import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {hashHistory} from 'react-router';
const styles = {
  avatar: {
    marginRight: 20,
  },
};

class PendingRequestItem extends React.Component {
  render() {
    return(
      <div className="layout-helper" >
        <Avatar size={35} src={this.props.pendingFriend.image_url} style={styles.avatar} />
        <h4>{this.props.pendingFriend.username}</h4>
          <RaisedButton
            label="Add Friend"
            fullWidth={false}
            primary={true}
            onTouchTap={() => this.props.acceptFriendRequest(this.props.pendingFriend.id)}
          />
          <RaisedButton
            label="Remove"
            fullWidth={false}
            secondary={true}
            onTouchTap={() => this.props.rejectFriendRequest(this.props.pendingFriend.id)}
          />
      </div>
    );
  }
}

export default PendingRequestItem;
