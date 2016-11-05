import { connect } from 'react-redux';
import { fetchWishlistDetail, createWishlistItem, deleteWishlistItem } from '../../actions/wishlist_detail_actions';

import WishlistShow from './wishlist_show';

const mapStateToProps = ({wishlist_details, session}) => ({
  wishlist_details: wishlist_details,
  currentUser: session.currentUser,
  wisher: wishlist_details.wisher,
  items: wishlist_details.items,
  purchasers: wishlist_details.purchasers,
  products: wishlist_details.products,
  errors: wishlist_details.errors
});

const mapDispatchToProps = dispatch => ({
  fetchWishlistDetail: (wishlistId) => dispatch(fetchWishlistDetail(wishlistId)),
  createWishlistItem: (wishlistItem) => dispatch(createWishlistItem(wishlistItem)),
  deleteWishlistItem: (wishlistItemId) => dispatch(deleteWishlistItem(wishlistItemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistShow);
