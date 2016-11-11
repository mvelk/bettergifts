import { connect } from 'react-redux';
import {
  fetchFriendsList,
  fetchPendingRequests,
  searchForFriends,
  clearUserSearchResults,
  addFriend,
  unfriend,
  acceptFriendRequest,
  rejectFriendRequest,
  blockFriend } from '../../actions/friends_actions';

import FriendsIndex from './friends_index';

import { openUserSearchFormModal, closeUserSearchFormModal } from '../../actions/modals_actions';

const mapStateToProps = ({ session, friends, modals }) => ({
  currentUser: session.currentUser,
  friends: friends.friends,
  userSearchResults: friends.userSearchResults,
  pendingRequests: friends.pendingRequests,
  friendStatus: friends.friendStatus,
  userSearchModalOpen: modals.userSearch
});

const mapDispatchToProps = (dispatch) => ({
  searchForFriends: (queryString) => dispatch(searchForFriends(queryString)),
  fetchFriendsList: (userId) => dispatch(fetchFriendsList(userId)),
  addFriend: (friendId) => dispatch(addFriend(friendId)),
  unfriend: (friendId) => dispatch(unfriend(friendId)),
  fetchPendingRequests: (userId) => dispatch(fetchPendingRequests(userId)),
  acceptFriendRequest: (friendId) => dispatch(acceptFriendRequest(friendId)),
  rejectFriendRequest: (friendId) => dispatch(rejectFriendRequest(friendId)),
  blockFriend: (friendId) => dispatch(blockFriend(friendId)),
  closeUserSearchFormModal: () => dispatch(closeUserSearchFormModal()),
  openUserSearchFormModal: () => dispatch(openUserSearchFormModal()),
  clearUserSearchResults: () => dispatch(clearUserSearchResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex);
