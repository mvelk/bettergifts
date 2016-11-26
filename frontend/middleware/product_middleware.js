import { accumulateProductSearchResults, receiveProductSearchResults, receiveRecommendedProductResults, SEARCH_PRODUCTS_BY_KEYWORD, FETCH_RECOMMENDED_PRODUCTS, ADD_PRODUCT_TO_DB } from '../actions/product_actions';
import { createWishlistItem } from '../actions/wishlist_detail_actions';
import { searchProductsByKeyword, fetchRecommendedProducts, addProductToDB } from '../util/product_api_util';
import { closeWishlistItemFormModal } from '../actions/modals_actions';
export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const searchSuccessCallback2 = (products) => {
    dispatch(accumulateProductSearchResults(products));
    if (products[0].search_num <= 5) {
      searchProductsByKeyword(
        products[0].keywords,
        products[0].search_num,
        products[0].min_price,
        products[0].max_price,
        products[0].category,
        searchSuccessCallback2,
        errorCallback);
    }
  };
  const searchSuccessCallback = (products) => {
    dispatch(receiveProductSearchResults(products));
    if (products[0].search_num <= 5) {
      searchProductsByKeyword(
        products[0].keywords,
        products[0].search_num,
        products[0].min_price,
        products[0].max_price,
        products[0].category,
        searchSuccessCallback2,
        errorCallback);
    }
  };
  const recommendedProductsSuccessCallback = (products) => {
    dispatch(receiveRecommendedProductResults(products));
  };
  const closeModalCallback = () => {
    dispatch(closeWishlistItemFormModal());
  };
  switch(action.type) {
    case SEARCH_PRODUCTS_BY_KEYWORD:
      searchProductsByKeyword(
        action.keywords,
        action.searchNum,
        action.minPrice,
        action.maxPrice,
        action.category,
        searchSuccessCallback,
        errorCallback);
      return next(action);
    case FETCH_RECOMMENDED_PRODUCTS:
      fetchRecommendedProducts(recommendedProductsSuccessCallback, errorCallback);
    case ADD_PRODUCT_TO_DB:
      addProductToDB(action.product, action.wishlistItem, closeModalCallback, errorCallback);
    default:
      return next(action);
  }
};
