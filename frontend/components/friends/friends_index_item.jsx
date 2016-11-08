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

class FriendsIndexItem extends React.Component {
  render() {
    return(
      <div className="friends-index-item" >
        <Avatar size={35} src={this.props.friend.image_url} style={styles.avatar} />
        <h4>{this.props.friend.username}</h4>
      </div>
    );
  }
}

export default FriendsIndexItem;
