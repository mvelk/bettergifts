import { receiveMyWishlist,
         receiveAllMyWishlists,
         receiveAllFriendsWishlists,
         receiveAllUpcomingWishlists,
         removeWishlist,
         FETCH_ALL_MY_WISHLISTS,
         FETCH_ALL_FRIENDS_WISHLISTS,
         FETCH_ALL_UPCOMING_WISHLISTS,
         CREATE_NEW_WISHLIST,
         DELETE_WISHLIST  } from '../actions/wishlist_actions';

import { fetchAllMyWishlists,
         fetchAllFriendsWishlists,
         fetchAllUpcomingWishlists,
         deleteWishlist,
         createNewWishlist } from '../util/wishlist_api_util';

export default ({dispatch}) => next => action => {
  console.log(action);
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const successCallback1 = (myWishlist) => {
    dispatch(receiveMyWishlist(myWishlist));
  };
  const successCallback2 = (myWishlists) => {
    dispatch(receiveAllMyWishlists(myWishlists));
  };
  const successCallback3 = (friendsWishlists) => {
    console.log('great success');
    dispatch(receiveAllFriendsWishlists(friendsWishlists));
  };
  const successCallback4 = (upcomingWishlists) => {
    dispatch(receiveAllUpcomingWishlists(upcomingWishlists));
  };
  const successCallback5 = (wishlist) => {
    dispatch(removeWishlist(wishlist));
  };

  switch(action.type) {
    case FETCH_ALL_MY_WISHLISTS:
      fetchAllMyWishlists(successCallback2, errorCallback);
      return next(action);
    case FETCH_ALL_FRIENDS_WISHLISTS:
    console.log('we are making the request');
      fetchAllFriendsWishlists(successCallback3, errorCallback);
      return next(action);
    case FETCH_ALL_UPCOMING_WISHLISTS:
      fetchAllUpcomingWishlists(successCallback4, errorCallback);
      return next(action);
    case CREATE_NEW_WISHLIST:
      console.log('we are in the middleware and the action is double nested');
      console.log(action);
      createNewWishlist(action.wishlist, successCallback1, errorCallback);
      return next(action);
    case DELETE_WISHLIST:
      deleteWishlist(action.id, successCallback5, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
