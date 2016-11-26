import { connect } from 'react-redux';
import { searchProductsByKeyword, addProductToDB } from '../../actions/product_actions';
import ProductsIndex from './products_index';
import { openWishlistItemFormModal, closeWishlistItemFormModal } from '../../actions/modals_actions';
import { fetchAllMyWishlists } from '../../actions/wishlist_actions';
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  myWishlists: state.wishlists.myWishlists,
  recommendedProducts: state.products.recommended_products,
  searchResults: state.products.product_search_results,
  wishlistItemModalOpen: state.modals.wishlistItem
});

const mapDispatchToProps = (dispatch) => ({
  searchProductsByKeyword: (keywords, searchNum, minPrice, maxPrice, category) => dispatch(searchProductsByKeyword(keywords, searchNum, minPrice, maxPrice, category)),
  addProductToDB: (product, wishlistItem) => dispatch(addProductToDB(product, wishlistItem)),
  openWishlistItemFormModal: () => dispatch(openWishlistItemFormModal()),
  closeWishlistItemFormModal: () => dispatch(closeWishlistItemFormModal()),
  fetchAllMyWishlists: () => dispatch(fetchAllMyWishlists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
