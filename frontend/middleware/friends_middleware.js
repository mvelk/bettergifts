import {
  FETCH_FRIENDS_LIST,
  FETCH_PENDING_REQUESTS,
  GET_FRIENDSHIP_STATUS,
  ADD_FRIEND,
  BLOCK_FRIEND,
  REJECT_FRIEND_REQUEST,
  ACCEPT_FRIEND_REQUEST,
  UNFRIEND,
  SEARCH_FOR_FRIENDS,
  receiveFriendsList,
  receivePendingRequests,
  receiveFriend,
  removeFriend,
  removePendingRequest,
  receiveFriendStatus,
  receiveUserSearchResults,
  fetchFriendsList as fetchFriends
} from '../actions/friends_actions';

import {
  searchForFriends,
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
    const successCallback = (data) => {
      console.log(data);
    };
    const receiveUserSearchResultsCallback = (users) => {
      dispatch(receiveUserSearchResults(users));
    };
    const receiveFriendsCallback = (friends) => {
      console.log(friends);
      dispatch(receiveFriendsList(friends));
    };
    const receivePendingRequestsCallback = (pendingFriends) => {
      dispatch(receivePendingRequests(pendingFriends));
    };
    const removePendingAndFetchFriendsCallback = (data) => {
      dispatch(removePendingRequest(data.friendship));
      dispatch(receiveFriend(data.friend));
    };
    const receiveFriendStatusCallback = (friendStatus) => {
      dispatch(receiveFriendStatus(friendStatus));
    };
    const receiveFriendCallback = (friend) => {
      dispatch(receiveFriend(friend));
    };
    const removePendingRequestCallback = (friendship) => {
      dispatch(removePendingRequest(friendship));
    };
    const removeFriendCallback = (friendId) => {
      dispatch(removeFriend(friendId));
    };
    const fetchFriendsListCallback = () => {
      dispatch(fetchFriends(window.currentUser.id));
    };

    switch(action.type) {
      case SEARCH_FOR_FRIENDS:
        searchForFriends(action.queryString, receiveUserSearchResultsCallback, errorsCallback);
        return next(action);
      case FETCH_FRIENDS_LIST:
        fetchFriendsList(action.userId, receiveFriendsCallback, errorsCallback);
        return next(action);
      case FETCH_PENDING_REQUESTS:
        fetchPendingRequests(action.userId, receivePendingRequestsCallback, errorsCallback);
        return next(action);
      case GET_FRIENDSHIP_STATUS:
        getFriendshipStatus(action.friendId, receiveFriendStatusCallback, errorsCallback);
        return next(action);
      case ADD_FRIEND:
        addFriend(action.friendId, fetchFriendsListCallback, errorsCallback);
        return next(action);
      case BLOCK_FRIEND:
        updateFriendship(action.friendId, action.status, fetchFriendsListCallback, errorsCallback);
        return next(action);
      case REJECT_FRIEND_REQUEST:
        updateFriendship(action.friendId, action.status, removePendingRequestCallback, errorsCallback);
        return next(action);
      case ACCEPT_FRIEND_REQUEST:
        updateFriendship(action.friendId, action.status, removePendingAndFetchFriendsCallback, errorsCallback);
        return next(action);
      case UNFRIEND:
        unfriend(action.friendId, fetchFriendsListCallback, errorsCallback);
        return next(action);
      default:
        return next(action);
    }
  };
