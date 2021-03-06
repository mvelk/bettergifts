import {
  RECEIVE_FRIENDS_LIST,
  RECEIVE_USER_SEARCH_RESULTS,
  RECEIVE_PENDING_REQUESTS,
  CLEAR_USER_SEARCH_RESULTS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND,
  REMOVE_PENDING_REQUEST,
  RECEIVE_FRIEND_STATUS } from "../actions/friends_actions";
import { LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = { friends: [], pendingRequests: [], friendStatus: {}, userSearchResults: []}, action) => {
  Object.freeze(oldState);
  let newState;
  let newFriends;
  let newPendingRequests;
  let targetId;
  let index;
  switch(action.type) {
    case LOGOUT:
      return { friends: [], pendingRequests: [], friendStatus: {}, userSearchResults: []};

    case CLEAR_USER_SEARCH_RESULTS:
      newState = merge({}, oldState);
      newState.userSearchResults = [];
      return newState;

    case RECEIVE_USER_SEARCH_RESULTS:
      newState = merge({}, oldState);
      newState.userSearchResults = action.users;
      return newState;

    case RECEIVE_FRIENDS_LIST:
      newState = merge({}, oldState);
      newState.friends = action.friends;
      return newState;

    case RECEIVE_PENDING_REQUESTS:
      newState = merge({}, oldState);
      newState.pendingRequests = action.pendingFriends;
      return newState;

    case RECEIVE_FRIEND:
      newState = merge({}, oldState);
      newState.friends.push(action.friend);
      return newState;

    case REMOVE_FRIEND:
      targetId = action.userId;
      index = -1;
      for (let i = 0; i < oldState.friends.length; i++) {
        if (oldState.friends[i].id === targetId) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        return oldState;
      } else {
        newFriends = [
          ...oldState.friends.slice(0, index),
          ...oldState.friends.slice(index + 1)
        ];
        newState = merge({}, oldState, { friends: newFriends });
        return newState;
      }

    case REMOVE_PENDING_REQUEST:
      index = -1;
      for (let i = 0; i < oldState.pendingRequests.length; i++) {
        if (oldState.pendingRequests[i].id == action.friendship.user_one_id || oldState.pendingRequests[i].id == action.friendship.user_two_id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        return oldState;
      } else {
        newPendingRequests = [...oldState.pendingRequests];
        newPendingRequests.splice(index, 1);
        newState = merge({}, oldState);
        newState.pendingRequests = newPendingRequests;
        return newState;
      }


    case RECEIVE_FRIEND_STATUS:
      newState = merge({}, oldState, { friendStatus: action.friendStatus });
      return newState;

    default:
      return oldState;
  }
};
