export const fetchAllMyWishlists = (success, error) => {
  $.ajax({
    method: 'get',
    url: '/api/wishlists',
    success,
    error
  });
};
export const fetchAllFriendsWishlists = (success, error) => {
  console.log("we made it");
  $.ajax({
    method: 'get',
    url: '/api/friends-wishlists',
    success,
    error
  });
};
export const fetchAllUpcomingWishlists = (success, error) => {
  $.ajax({
    method: 'get',
    url: '/api/upcoming-wishlists',
    success,
    error
  });
};
export const deleteWishlist = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `/api/wishlists/${id}`,
    success,
    error
  });
};

export const createNewWishlist = (wishlist, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/wishlists',
    data: { wishlist },
    success,
    error
  });
};
