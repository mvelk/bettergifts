import {
  RECEIVE_PAST_PURCHASES,
  RECEIVE_COMMITTED_PURCHASES,
  RECEIVE_RECEIVED_GIFTS } from '../actions/purchase_actions';

import { merge } from 'lodash';

export default ( oldState = { pastPurchases: [],
                              committedPurchases: [],
                              receivedGifts: [] }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_PAST_PURCHASES:
      newState = merge({}, oldState);
      newState.pastPurchases = action.purchases;
      return newState;
    case RECEIVE_COMMITTED_PURCHASES:
      newState = merge({}, oldState);
      newState.committedPurchases = action.purchases;
      return newState;
    case RECEIVE_RECEIVED_GIFTS:
      newState = merge({}, oldState);
      newState.receivedGifts = action.gifts;
      return newState;
    default:
      return oldState;
  }
};
