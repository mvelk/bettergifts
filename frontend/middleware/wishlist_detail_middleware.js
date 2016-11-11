import { FETCH_WISHLIST_DETAIL,
         fetchWishlistDetail as fetchDetail,
         CREATE_WISHLIST_ITEM,
         DELETE_WISHLIST_ITEM,
         CANCEL_ITEM_PURCHASE,
         COMMIT_ITEM_PURCHASE,
         receiveWishlistDetail } from '../actions/wishlist_detail_actions';

import { fetchWishlistDetail,
         cancelItemPurchase,
         commitItemPurchase,
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
    dispatch(fetchDetail(wishlistItem.wishlist_id));
  };

  const successCallback = (data) => {
    console.log(data);
  };

  switch(action.type) {
    case FETCH_WISHLIST_DETAIL:
      fetchWishlistDetail(action.wishlistId, receiveWishlistDetailCallback, errorCallback);
      return next(action);
    case COMMIT_ITEM_PURCHASE:
      commitItemPurchase(action.purchaserId, action.wishlistItemId, refetchCallback, errorCallback);
    case CANCEL_ITEM_PURCHASE:
      cancelItemPurchase(action.wishlistItemId, refetchCallback, errorCallback);
    case DELETE_WISHLIST_ITEM:
      deleteWishlistItem(action.id, refetchCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
