import { RECEIVE_MY_WISHLIST,
         RECEIVE_ALL_MY_WISHLISTS,
         RECEIVE_ALL_FRIENDS_WISHLISTS,
         RECEIVE_ALL_UPCOMING_WISHLISTS,
         REMOVE_WISHLIST } from '../actions/session_actions';
import { merge } from 'lodash';


export default (oldState = { myWishlists: [], friendsWishlists: [], upcomingWishlists: [] }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
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
      let indexToRemove = -1
      for (let i = 0; i < oldState.myWishlists.length; i++) {
        if (oldState.myWishlists[i].id ===
        indexToRemove = oldState.myWishlists.indexOfaction.wishlist.id
      }
      newState = merge(
        {},
        oldState,
        myWishlists.slice()
      )
    default:
      return oldState;
  }
};
