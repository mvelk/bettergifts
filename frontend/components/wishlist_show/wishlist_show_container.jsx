import { connect } from 'react-redux';
import {
  fetchWishlistDetail,
  createWishlistItem,
  deleteWishlistItem,
  commitItemPurchase,
  cancelItemPurchase } from '../../actions/wishlist_detail_actions';

import {
    deleteWishlist } from '../../actions/wishlist_actions';

import WishlistShow from './wishlist_show';

const mapStateToProps = state => {
  return ({
    wishlistDetail: state.wishlistDetail,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  deleteWishlist: (id) => dispatch(deleteWishlist(id)),
  fetchWishlistDetail: (wishlistId) => dispatch(fetchWishlistDetail(wishlistId)),
  createWishlistItem: (wishlistItem) => dispatch(createWishlistItem(wishlistItem)),
  deleteWishlistItem: (wishlistItemId) => dispatch(deleteWishlistItem(wishlistItemId)),
  commitItemPurchase: (purchaserId, wishlistItemId) => dispatch(commitItemPurchase(purchaserId, wishlistItemId)),
  cancelItemPurchase: (wishlistItemId) => dispatch(cancelItemPurchase(wishlistItemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistShow);
