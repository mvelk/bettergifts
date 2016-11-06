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
import { fetchWishlistDetail } from './actions/wishlist_detail_actions';
import { searchProductsByKeyword } from './util/product_api_util';

const success = (products) => { console.log(products); };
const errors = (err) => { console.log(err.responseJSON); };

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if (typeof window.currentUser !== "undefined") {
    const preloadedState = {
      session: {currentUser: window.currentUser, errors: {} },
      modals: { auth: false, side: false, wishlist: false },
      wishlists: { myWishlists: [], friendsWishlists: [], upcomingWishlists: [], errors: {} },
      wishlistDetail: { items: [] },
      products: []
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchAllMyWishlists = fetchAllMyWishlists;
  window.fetchAllFriendsWishlists = fetchAllFriendsWishlists;
  window.fetchAllUpcomingWishlists = fetchAllUpcomingWishlists;
  window.fetchWishlistDetail = fetchWishlistDetail;
  window.deleteWishlist = deleteWishlist;
  window.createNewWishlist = createNewWishlist;
  window.logout = logout;
  window.searchProductsByKeyword = searchProductsByKeyword;
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
