import { connect } from 'react-redux';
import { fetchWishlistDetail, createWishlistItem, deleteWishlistItem } from '../../actions/wishlist_detail_actions';

import WishlistShow from './wishlist_show';

const mapStateToProps = state => {
  console.log(state.wishlistDetail);
  return ({
    wishlistDetail: state.wishlistDetail,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchWishlistDetail: (wishlistId) => dispatch(fetchWishlistDetail(wishlistId)),
  createWishlistItem: (wishlistItem) => dispatch(createWishlistItem(wishlistItem)),
  deleteWishlistItem: (wishlistItemId) => dispatch(deleteWishlistItem(wishlistItemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistShow);
