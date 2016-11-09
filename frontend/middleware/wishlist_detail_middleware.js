import { FETCH_WISHLIST_DETAIL,
         fetchWishlistDetail as fetchDetail,
         CREATE_WISHLIST_ITEM,
         DELETE_WISHLIST_ITEM,
         receiveWishlistDetail } from '../actions/wishlist_detail_actions';

import { fetchWishlistDetail,
         createWishlistItem,
         deleteWishlistItem } from '../util/wishlist_detail_api_util';

// deliberate decision made to re-receive all wishlist detail after
// each creation or deletion. due to scale of app, do not expect
// noticable impact on performance. if this functionality becomes
// slow, should refactor backend to return only added/removed item
// and add receiveWishlistItem and removeWishlistItem functionality to
// frontend

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };

  const receiveWishlistDetailCallback = (wishlistDetail) => {
    dispatch(receiveWishlistDetail(wishlistDetail));
  };

  const refetchCallback = (wishlistItem) => {
    dispatch(fetchDetail(wishlistItem.wishlistId));
  };

  const successCallback = (data) => {
    console.log(data);
  };

  switch(action.type) {
    case FETCH_WISHLIST_DETAIL:
      fetchWishlistDetail(action.wishlistId, receiveWishlistDetailCallback, errorCallback);
      return next(action);
    case CREATE_WISHLIST_ITEM:
      createWishlistItem(action.wishlistItem, refetchCallback, errorCallback);
      return next(action);
    case DELETE_WISHLIST_ITEM:
      deleteWishlistItem(action.id, refetchCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
