import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openAuthModal, openSideDrawer } from '../../actions/modals_actions';
import {
  fetchPendingRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  blockFriend } from '../../actions/friends_actions';

import Nav from './nav';

const mapStateToProps = ({session, friends}, ownProps) => ({
  currentUser: session.currentUser,
  pendingRequests: friends.pendingRequests,
  location: ownProps.location
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openAuthModal: () => dispatch(openAuthModal()),
  openSideDrawer: () => dispatch(openSideDrawer()),
  fetchPendingRequests: (userId) => dispatch(fetchPendingRequests(userId)),
  acceptFriendRequest: (friendId) => dispatch(acceptFriendRequest(friendId)),
  rejectFriendRequest: (friendId) => dispatch(rejectFriendRequest(friendId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
