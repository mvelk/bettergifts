import { connect } from 'react-redux';
import { addProductToDB } from '../../actions/product_actions';
import ProductsIndex from './products_index';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  myWishlists: state.wishlists.myWishlists,
  product: state.products[ownProps.params.productIdx]
});

const mapDispatchToProps = (dispatch) => ({
  addProductToDB: (product, wishlistId) => dispatch(addProductToDB(product, wishlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
