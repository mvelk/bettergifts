import { connect } from 'react-redux';
import { searchProductsByKeyword } from '../../actions/product_actions';
import ProductsIndex from './products_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  myWishlists: state.wishlists.myWishlists,
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  searchProductsByKeyword: (keywords) => dispatch(searchProductsByKeyword(keywords))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
