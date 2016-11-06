import { receiveProductSearchResults, SEARCH_PRODUCTS_BY_KEYWORD } from '../actions/wishlist_actions';

import { searchProductsByKeyword } from '../util/wishlist_api_util';

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const successCallback = (products) => {
    dispatch(receiveProductSearchResults(products));
  };

  switch(action.type) {
    case SEARCH_PRODUCTS_BY_KEYWORD:
      searchProductsByKeyword(action.keywords, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
