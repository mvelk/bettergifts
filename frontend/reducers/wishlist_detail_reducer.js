import { RECEIVE_WISHLIST_DETAIL,
         REMOVE_WISHLIST_ITEM } from "../actions/wishlist_detail_actions";
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  console.log(oldState);
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_WISHLIST_DETAIL:
      console.log('we are in the reducer case statement');
      newState = merge({}, oldState, action.wishlistDetail);
      console.log(newState);
      console.log(newState == oldState);
      return newState;
    case REMOVE_WISHLIST_ITEM:
      newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};
