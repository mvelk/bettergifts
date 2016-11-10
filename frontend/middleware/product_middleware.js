import { receiveProductSearchResults, SEARCH_PRODUCTS_BY_KEYWORD, ADD_PRODUCT_TO_DB } from '../actions/product_actions';
import { createWishlistItem } from '../actions/wishlist_detail_actions';
import { searchProductsByKeyword, addProductToDB } from '../util/product_api_util';
import { closeWishlistItemFormModal } from '../actions/modals_actions';

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const searchSuccessCallback = (products) => {
    dispatch(receiveProductSearchResults(products));
  };
  const closeModalCallback = () => {
    dispatch(closeWishlistItemFormModal());
  };
  console.log(action);
  switch(action.type) {
    case SEARCH_PRODUCTS_BY_KEYWORD:
      searchProductsByKeyword(action.keywords, searchSuccessCallback, errorCallback);
      return next(action);
    case ADD_PRODUCT_TO_DB:
      addProductToDB(action.product, action.wishlistItem, closeModalCallback, errorCallback);
    default:
      return next(action);
  }
};
