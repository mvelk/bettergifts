import { receiveProductSearchResults, SEARCH_PRODUCTS_BY_KEYWORD, ADD_PRODUCT_TO_DB } from '../actions/product_actions';
import { createWishlistItem } from '../actions/wishlist_detail_actions';
import { searchProductsByKeyword, addProductToDB } from '../util/product_api_util';

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const searchSuccessCallback = (products) => {
    console.log(products);
    dispatch(receiveProductSearchResults(products));
  };
  const createWishlistItemCallback = (data) => {
    dispatch(createWishlistItem(data.productId, data.wishlistId));
  };
  console.log(action);
  switch(action.type) {
    case SEARCH_PRODUCTS_BY_KEYWORD:
      console.log('we made it');
      searchProductsByKeyword(action.keywords, searchSuccessCallback, errorCallback);
      return next(action);
    case ADD_PRODUCT_TO_DB:
      addProductToDB(action.product, action.wishlistId, createWishlistItemCallback, errorCallback);
    default:
      return next(action);
  }
};
