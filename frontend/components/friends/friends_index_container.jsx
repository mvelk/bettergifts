import { connect } from 'react-redux';
import {
  fetchFriendsList,
  fetchPendingRequests,
  addFriend,
  unfriend,
  acceptFriendRequest,
  rejectFriendRequest,
  blockFriend } from '../../actions/friends_actions';

import FriendsIndex from './friends_index';

const mapStateToProps = ({ session, friends }) => ({
  currentUser: session.currentUser,
  friends: friends.friends,
  pendingRequests: friends.pendingRequests,
  friendStatus: friends.friendStatus
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriendsList: (userId) => dispatch(fetchFriendsList(userId)),
  fetchPendingRequests: (userId) => dispatch(fetchPendingRequests(userId)),
  addFriend: (friendId) => dispatch(addFriend(friendId)),
  unfriend: (friendId) => dispatch(unfriend(friendId)),
  acceptFriendRequest: (friendId) => dispatch(acceptFriendRequest(friendId)),
  rejectFriendRequest: (friendId) => dispatch(rejectFriendRequest(friendId)),
  blockFriend: (friendId) => dispatch(blockFriend(friendId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex);
