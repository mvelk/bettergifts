import {
  RECEIVE_FRIENDS_LIST,
  RECEIVE_PENDING_REQUESTS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND,
  REMOVE_PENDING_REQUEST,
  RECEIVE_FRIEND_STATUS } from "../actions/product_actions";

import { merge } from 'lodash';

export default (oldState = { friends: [], pendingRequests: [], friendStatus: {}}, action) => {
  console.log(action);
  let newState;
  let newFriends;
  let newPendingRequests;
  switch(action.type) {

    case RECEIVE_FRIENDS_LIST:
      newState = merge({}, oldState, { friends: action.friends });
      return newState;

    case RECEIVE_PENDING_REQUESTS:
      newState = merge({}, oldState, { pendingRequests: action.pendingFriends });
      return newState;

    case RECEIVE_FRIEND:
      newFriends = [
        ...oldState.friends,
        action.friend
      ];
      newState = merge({}, oldState, { friends: newFriends });

    case REMOVE_FRIEND:
      let targetId = action.userId;
      let index = -1;
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
      let targetId = action.userId;
      let index = -1;
      for (let i = 0; i < oldState.pendingRequests.length; i++) {
        if (oldState.pendingRequests[i].id === targetId) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        return oldState;
      } else {
        newPendingRequests = [
          ...oldState.pendingRequests.slice(0, index),
          ...oldState.pendingRequests.slice(index + 1)
        ];
        newState = merge({}, oldState, { pendingRequests: newPendingRequests });
        return newState;
      }

    case RECEIVE_FRIEND_STATUS:
      newState = merge({}, oldState, { friendStatus: action.friendStatus });
      return newState;

    default:
      return oldState;
  }
};
