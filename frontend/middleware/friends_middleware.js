import {
  FETCH_FRIENDS_LIST,
  FETCH_PENDING_REQUESTS,
  GET_FRIENDSHIP_STATUS,
  ADD_FRIEND,
  BLOCK_FRIEND,
  REJECT_FRIEND_REQUEST,
  ACCEPT_FRIEND_REQUEST,
  UNFRIEND,
  receiveFriendsList,
  receivePendingRequests,
  removeFriend,
  removePendingRequest,
  receiveFriendStatus
} from '../actions/friends_actions';

import {
  fetchFriendsList,
  fetchPendingRequests,
  getFriendshipStatus,
  addFriend,
  updateFriendship,
  unfriend } from '../util/friends_api_util';

  export default ({dispatch}) => next => action => {
    const errorsCallback = (err) => {
      console.log(err.responseJSON);
    };
    const receiveFriendsCallback = (data) => {

    };
    switch(action.type) {
      case FETCH_FRIENDS_LIST:
        fetchFriendsList(action.userId, receiveFriendsCallback, errorsCallback);
        return next(action);
      case FETCH_PENDING_REQUESTS:
        return next(action);
      case GET_FRIENDSHIP_STATUS:
        return next(action);
      case ADD_FRIEND:
        return next(action);
      case BLOCK_FRIEND:
        return next(action);
      case REJECT_FRIEND_REQUEST:
        return next(action);
      case ACCEPT_FRIEND_REQUEST:
        return next(action);
      case UNFRIEND:
        return next(action);
      default:
        return next(action);
    }
  };
