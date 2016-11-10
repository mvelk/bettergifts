import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { fetchAllMyWishlists,
         fetchAllFriendsWishlists,
         fetchAllUpcomingWishlists,
         deleteWishlist,
         createNewWishlist } from './actions/wishlist_actions';
import { searchProductsByKeyword } from './util/product_api_util';

import { fetchFriendsList, fetchPendingRequests, acceptFriendRequest } from './actions/friends_actions';

const success = (data) => { console.log(data); };
const errors = (err) => { console.log(err.responseJSON); };

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  let preloadedState;
  if (typeof window.currentUser !== "undefined") {
    preloadedState = {
      session: {currentUser: window.currentUser, errors: {} },
      modals: { auth: false, side: false, wishlist: false, wishlistItem: false, userSearch: false },
      wishlists: { myWishlists: [], friendsWishlists: [], upcomingWishlists: [], errors: {} },
      wishlistDetail: { items: [] },
      products: [],
      friends: { friends: [], pendingRequests: [], friendStatus: {}, userSearchResults: [] }
    };
  } else {
    preloadedState = {
      session: {currentUser: {}, errors: {} },
      modals: { auth: false, side: false, wishlist: false, wishlistItem: false, userSearch: false },
      wishlists: { myWishlists: [], friendsWishlists: [], upcomingWishlists: [], errors: {} },
      wishlistDetail: { items: [] },
      products: [],
      friends: { friends: [], pendingRequests: [], friendStatus: {}, userSearchResults: [] }
    };
  }
  store = configureStore(preloadedState);
  window.success = success;
  window.errors = errors;
  window.fetchFriendsList = fetchFriendsList;
  window.fetchPendingRequests = fetchPendingRequests;
  window.acceptFriendRequest = acceptFriendRequest;
  // window.fetchPendingRequests = fetchPendingRequests;
  // window.getFriendshipStatus = getFriendshipStatus;
  // window.addFriend = addFriend;
  // window.updateFriendship = updateFriendship;
  // window.unfriend = unfriend;
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
