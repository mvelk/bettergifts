export const fetchWishlistDetail = (wishlistId, success, error) => {
  $.ajax({
    method: 'get',
    url: `/api/wishlists/${wishlistId}`,
    success,
    error
  });
};

export const createWishlistItem = (wishlistItem, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/wishlist_items',
    data: { wishlist_item: wishlistItem },
    success,
    error
  });
};

export const deleteWishlistItem = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `/api/wishlist_items/${id}`,
    success,
    error
  });
};

export const commitItemPurchase = (purchaserId, wishlistItemId, success, error) => {
  $.ajax({
    method: 'patch',
    url: '/api/commit-item-purchase',
    data: { purchaser_id: purchaserId, wishlist_item_id: wishlistItemId },
    success,
    error
  });
};

export const cancelItemPurchase = (wishlistItemId, success, error) => {
  $.ajax({
    method: 'patch',
    url: '/api/cancel-item-purchase',
    data: { wishlist_item_id: wishlistItemId },
    success,
    error
  });
};
