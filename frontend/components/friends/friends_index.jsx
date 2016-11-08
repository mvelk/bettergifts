import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { blue900 } from 'material-ui/styles/colors';
import FriendsIndexItem from './friends_index_item';
import PendingRequestIndexItem from './pending_request_item';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  avatar: {
    marginRight: 40,
  },
};

class FriendsIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchFriendsList(this.props.currentUser.id);
    this.props.fetchPendingRequests(this.props.currentUser.id);
  }

  render() {

    return (
      <div>

          <div>
            <section className="friends-index-heading content-wrapper layout-helper">
              <div className="friends-index-heading-content">
                <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                <hgroup>
                  <h2 style={styles.headline}>{this.props.currentUser.username}&#8217;s Friends</h2>
                  <p>Friends: {this.props.friends.length}</p>
                </hgroup>
              </div>

            </section>

            <section className="friends-index-body content-wrapper layout-helper">
              <div className="friends-index-content-container layout-helper">
                <h3>Friends</h3>
                {this.props.friends.map((friend, idx) => (
                  <FriendsIndexItem
                    friend={friend}
                    unfriend={this.props.unfriend}
                    blockFriend={this.props.blockFriend}
                    key={idx} />
                ))}
              </div>

              <div className="friends-index-content-container">
                <h3>Friend Requests</h3>
                {this.props.pendingRequests.map((pendingFriend, idx) => (
                  <PendingRequestIndexItem
                    pendingFriend={pendingFriend}
                    acceptFriendRequest={this.props.acceptFriendRequest}
                    rejectFriendRequest={this.props.rejectFriendRequest}
                    blockFriend={this.props.blockFriend}
                    key={idx} />
                ))}
              </div>

            </section>



          </div>

      </div>
    );
  }
}

export default FriendsIndex;