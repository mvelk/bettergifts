import { connect } from 'react-redux';
import { addProductToDB } from '../../actions/product_actions';
import ProductsIndex from './products_index';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  myWishlists: state.wishlists.myWishlists,
  product: state.products[ownProps.params.productIdx]
});

const mapDispatchToProps = (dispatch) => ({
  addProductToDB: (product, wishlistItem) => dispatch(addProductToDB(product, wishlistItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
