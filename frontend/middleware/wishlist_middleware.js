import { receiveMyWishlist,
         receiveAllMyWishlists,
         receiveAllFriendsWishlists,
         receiveAllUpcomingWishlists,
         removeWishlist,
         FETCH_ALL_MY_WISHLISTS,
         FETCH_ALL_FRIENDS_WISHLISTS,
         FETCH_ALL_UPCOMING_WISHLISTS,
         fetchAllUpcomingWishlists as fetchUpcomingWishlists,
         CREATE_NEW_WISHLIST,
         DELETE_WISHLIST  } from '../actions/wishlist_actions';

import { hashHistory } from 'react-router';

import { closeWishlistFormModal } from '../actions/modals_actions';

import { fetchAllMyWishlists,
         fetchAllFriendsWishlists,
         fetchAllUpcomingWishlists,
         deleteWishlist,
         createNewWishlist } from '../util/wishlist_api_util';

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const successCallback1 = (myWishlist) => {
    dispatch(closeWishlistFormModal());
    dispatch(receiveMyWishlist(myWishlist));
    dispatch(fetchUpcomingWishlists());
  };
  const successCallback2 = (myWishlists) => {
    dispatch(receiveAllMyWishlists(myWishlists));
  };
  const successCallback3 = (friendsWishlists) => {
    dispatch(receiveAllFriendsWishlists(friendsWishlists));
  };
  const successCallback4 = (upcomingWishlists) => {
    dispatch(receiveAllUpcomingWishlists(upcomingWishlists));
  };
  const successCallback5 = (wishlist) => {
    dispatch(removeWishlist(wishlist));
    hashHistory.push('/wishlists/0');
  };

  switch(action.type) {
    case FETCH_ALL_MY_WISHLISTS:
      fetchAllMyWishlists(successCallback2, errorCallback);
      return next(action);
    case FETCH_ALL_FRIENDS_WISHLISTS:
      fetchAllFriendsWishlists(successCallback3, errorCallback);
      return next(action);
    case FETCH_ALL_UPCOMING_WISHLISTS:
      fetchAllUpcomingWishlists(successCallback4, errorCallback);
      return next(action);
    case CREATE_NEW_WISHLIST:
      createNewWishlist(action.wishlist, successCallback1, errorCallback);
      return next(action);
    case DELETE_WISHLIST:
      deleteWishlist(action.id, successCallback5, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
