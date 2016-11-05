import { FETCH_WISHLIST_DETAIL,
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
  console.log(action);
  const errorCallback = (err) => {
    console.log("silly errors");
    console.log(err.responseJSON);
  };

  const successCallback = (wishlistDetail) => {
    console.log("great success");
    console.log(wishlistDetail);
    dispatch(receiveWishlistDetail(wishlistDetail));
  };

  switch(action.type) {
    case FETCH_WISHLIST_DETAIL:
      dispatch(fetchWishlistDetail(action.wishlistId,
                                   successCallback,
                                   errorCallback));
      return next(action);
    case CREATE_WISHLIST_ITEM:
      dispatch(createWishlistItem(action.wishlistItem,
                                  successCallback,
                                  errorCallback));
      return next(action);
    case DELETE_WISHLIST_ITEM:
      dispatch(deleteWishlistItem(action.id,
                                  successCallback,
                                  errorCallback));
      return next(action);
    default:
      return next(action);
  }
};
