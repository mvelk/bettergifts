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
      <div className="pending-request-item" >
        <div className="pending-request-content">
          <Avatar size={50} src={this.props.pendingFriend.image_url} style={{marginRight: 30}} />
          <div className="pending-request-text">
            <h4 className="pending-request-name">{this.props.pendingFriend.first_name + ' ' + this.props.pendingFriend.last_name}</h4>
            {this.props.pendingFriend.username}
          </div>
        </div>

        <div className="pending-request-actions">
          <RaisedButton
            icon={<i className="material-icons md-light">done</i>}
            style={{height:'24', paddingRight: 0, paddingLeft: 0, marginRight: '10'}}
            label="Accept"
            fullWidth={false}
            primary={true}
            onTouchTap={() => this.props.acceptFriendRequest(this.props.pendingFriend.id)}
          />
          <RaisedButton
            icon={<i className="material-icons md-light">close</i>}
            style={{height:'24'}}
            fullWidth={false}
            label="Remove"
            secondary={true}
            onTouchTap={() => this.props.rejectFriendRequest(this.props.pendingFriend.id)}
          />
        </div>
      </div>
    );
  }
}

export default PendingRequestItem;
