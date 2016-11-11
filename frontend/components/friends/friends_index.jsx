import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { blue900 } from 'material-ui/styles/colors';
import FriendsIndexItem from './friends_index_item';
import PendingRequestIndexItem from './pending_request_item';
import FriendsSearchForm from './friends_search_form';

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

          <div className="header-bar">
            <section className="friends-index-heading content-wrapper">
              <div className="friends-index-heading-content">
                <Avatar size={70} src={this.props.currentUser.image_url} style={styles.avatar} />
                <hgroup>
                  <h2 style={styles.headline}>{this.props.currentUser.username}&#8217;s Friends</h2>
                  <p>Friends: {this.props.friends.length }</p>
                </hgroup>

              </div>

              <RaisedButton
                label="Find More Friends"
                icon={<i className="material-icons md-light">person_add</i>}
                secondary={true}
                onTouchTap={ this.props.openUserSearchFormModal }
              />
            </section>
          </div>

            <section className="friends-index-body content-wrapper">
              <div className="friends-index-content-container">
                {this.props.friends.map((friend, idx) => (
                  <FriendsIndexItem
                    friend={friend}
                    unfriend={this.props.unfriend}
                    blockFriend={this.props.blockFriend}
                    key={idx} />
                ))}
              </div>

            </section>

            <FriendsSearchForm
              searchForFriends={this.props.searchForFriends}
              userSearchResults={this.props.userSearchResults}
              userSearchModalOpen={this.props.userSearchModalOpen}
              addFriend={this.props.addFriend}
              closeUserSearchFormModal={this.props.closeUserSearchFormModal}
              clearUserSearchResults={this.props.clearUserSearchResults}
              />


      </div>
    );
  }
}

export default FriendsIndex;
