export const RECEIVE_MY_WISHLIST = "RECEIVE_MY_WISHLIST";
export const RECEIVE_ALL_MY_WISHLISTS = "RECEIVE_ALL_MY_WISHLISTS";
export const RECEIVE_ALL_FRIENDS_WISHLISTS = "RECEIVE_ALL_FRIENDS_WISHLISTS";
export const RECEIVE_ALL_UPCOMING_WISHLISTS = "RECEIVE_ALL_UPCOMING_WISHLISTS";

export const CREATE_NEW_WISHLIST = "CREATE_NEW_WISHLIST";

export const DELETE_WISHLIST = "DELETE_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST";

export const FETCH_ALL_MY_WISHLISTS = "FETCH_ALL_MY_WISHLISTS";
export const FETCH_ALL_FRIENDS_WISHLISTS = "FETCH_ALL_FRIENDS_WISHLISTS";
export const FETCH_ALL_UPCOMING_WISHLISTS = "FETCH_ALL_UPCOMING_WISHLISTS";

export const receiveMyWishlist = (myWishlist) => ({
  type: RECEIVE_MY_WISHLIST,
  myWishlist
});

export const receiveAllMyWishlists = (myWishlists) => ({
  type: RECEIVE_ALL_MY_WISHLISTS,
  myWishlists
});

export const receiveAllFriendsWishlists = (friendsWishlists) => ({
  type: RECEIVE_ALL_FRIENDS_WISHLISTS,
  friendsWishlists
});

export const receiveAllUpcomingWishlists = (upcomingWishlists) => ({
  type: RECEIVE_ALL_UPCOMING_WISHLISTS,
  upcomingWishlists
});

export const createNewWishlist = (wishlist) => ({
  type: CREATE_NEW_WISHLIST,
  wishlist
});

export const deleteWishlist = (id) => ({
  type: DELETE_WISHLIST,
  id
});

export const removeWishlist = (wishlist) => ({
  type: REMOVE_WISHLIST,
  wishlist
});

export const fetchAllMyWishlists = () => ({
  type: FETCH_ALL_MY_WISHLISTS
});

export const fetchAllFriendsWishlists = () => ({
  type: FETCH_ALL_FRIENDS_WISHLISTS
});

export const fetchAllUpcomingWishlists = () => ({
  type: FETCH_ALL_UPCOMING_WISHLISTS
});
