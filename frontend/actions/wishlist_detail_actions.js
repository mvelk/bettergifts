export const FETCH_WISHLIST_DETAIL = "FETCH_WISHLIST_DETAIL";

export const RECEIVE_WISHLIST_DETAIL = "RECEIVE_WISHLIST_DETAIL";

export const CREATE_WISHLIST_ITEM = "CREATE_WISHLIST_ITEM";
export const DELETE_WISHLIST_ITEM = "DELETE_WISHLIST_ITEM";
export const REMOVE_WISHLIST_ITEM = "REMOVE_WISHLIST_ITEM";

export const fetchWishlistDetail = (wishlistId) => ({
  type: FETCH_WISHLIST_DETAIL,
  wishlistId
});

export const receiveWishlistDetail = (wishlistDetail) => ({
  type: RECEIVE_WISHLIST_DETAIL,
  wishlistDetail
});

export const createWishlistItem = (productId, wishlistId) => ({
  type: CREATE_WISHLIST_ITEM,
  productId,
  wishlistId
});

export const deleteWishlistItem = (id) => ({
  type: DELETE_WISHLIST_ITEM,
  id
});
