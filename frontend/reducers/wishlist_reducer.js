import { RECEIVE_MY_WISHLIST,
         RECEIVE_ALL_MY_WISHLISTS,
         RECEIVE_ALL_FRIENDS_WISHLISTS,
         RECEIVE_ALL_UPCOMING_WISHLISTS,
         REMOVE_WISHLIST } from '../actions/wishlist_actions';
import { LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = { myWishlists: [], friendsWishlists: [], upcomingWishlists: [], errors: {} }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case LOGOUT:
      return { myWishlists: [], friendsWishlists: [], upcomingWishlists: [], errors: {} };
    case RECEIVE_MY_WISHLIST:
      newState = merge({}, oldState);
      newState.myWishlists.push(action.myWishlist);
      return newState;
    case RECEIVE_ALL_MY_WISHLISTS:
      newState = merge({}, oldState, { myWishlists: action.myWishlists });
      return newState;
    case RECEIVE_ALL_FRIENDS_WISHLISTS:
      newState = merge({}, oldState, { friendsWishlists: action.friendsWishlists });
      return newState;
    case RECEIVE_ALL_UPCOMING_WISHLISTS:
      newState = merge({}, oldState, { upcomingWishlists: action.upcomingWishlists });
      return newState;
    case REMOVE_WISHLIST:
      let indexToRemove = -1;

      for (let i = 0; i < oldState.myWishlists.length; i++) {
        if (oldState.myWishlists[i].id === action.wishlist.id) {
          indexToRemove = i;
          break;
        }
      }
      //return old state if wishlist not found in array
      if (indexToRemove === -1) {
        return oldState;
      }
      //otherwise, dup state, set myWishlists to new array
      //with item to remove sliced out
      newState = merge({}, oldState);
      newState.myWishlists = [
        ...newState.myWishlists.slice(0, indexToRemove),
        ...newState.myWishlists.slice(indexToRemove + 1)
      ];
      return newState;
    default:
      return oldState;
  }
};
