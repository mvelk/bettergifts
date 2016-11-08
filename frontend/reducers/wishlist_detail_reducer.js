import { RECEIVE_WISHLIST_DETAIL,
         REMOVE_WISHLIST_ITEM } from "../actions/wishlist_detail_actions";
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_WISHLIST_DETAIL:
      return action.wishlistDetail;
    case REMOVE_WISHLIST_ITEM:
      newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};
