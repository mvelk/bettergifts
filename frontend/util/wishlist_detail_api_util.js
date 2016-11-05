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
    method: 'get',
    url: `/api/wishlist_items/${id}`,
    success,
    error
  });
};
