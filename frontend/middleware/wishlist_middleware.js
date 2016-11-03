import { receiveMyWishlist,
         receiveAllMyWishlists,
         receiveAllFriendsWishlists,
         receiveAllUpcomingWishlists,
         removeWishlist } from '../actions/session_actions';

import { fetchAllMyWishlists,
         fetchAllFriendsWishlists,
         fetchAllUpcomingWishlists,
         CREATE_NEW_WISHLIST,
         DELETE_WISHLIST,
         }


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
    default:
      return oldState;
  }
};
