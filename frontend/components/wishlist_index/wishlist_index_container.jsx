import { connect } from 'react-redux';
import { fetchAllMyWishlists,
         fetchAllFriendsWishlists,
         fetchAllUpcomingWishlists,
         deleteWishlist,
         createNewWishlist } from '../../actions/wishlist_actions';
import { openWishlistFormModal,
         closeWishlistFormModal } from '../../actions/modals_actions';
import WishlistIndex from './wishlist_index';

const mapStateToProps = ({wishlists, modals, session}) => ({
  myWishlists: wishlists.myWishlists,
  friendsWishlists: wishlists.friendsWishlists,
  upcomingWishlists: wishlists.upcomingWishlists,
  wishlistModalOpen: modals.wishlist,
  currentUser: session.currentUser,
  errors: wishlists.errors
});

const mapDispatchToProps = dispatch => ({
  fetchAllMyWishlists: () => dispatch(fetchAllMyWishlists()),
  fetchAllFriendsWishlists: () => dispatch(fetchAllFriendsWishlists()),
  fetchAllUpcomingWishlists: () => dispatch(fetchAllUpcomingWishlists()),
  deleteWishlist: id => dispatch(deleteWishlist(id)),
  createNewWishlist: wishlist => dispatch(createNewWishlist(wishlist)),
  openWishlistFormModal: () => dispatch(openWishlistFormModal()),
  closeWishlistFormModal: () => dispatch(closeWishlistFormModal()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistIndex);
