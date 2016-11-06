import { receiveProductSearchResults, SEARCH_PRODUCTS_BY_KEYWORD } from '../actions/product_actions';

import { searchProductsByKeyword } from '../util/product_api_util';

export default ({dispatch}) => next => action => {
  const errorCallback = (err) => {
    console.log(err.responseJSON);
  };
  const successCallback = (products) => {
    console.log(products);
    dispatch(receiveProductSearchResults(products));
  };
  console.log(action);
  switch(action.type) {
    case SEARCH_PRODUCTS_BY_KEYWORD:
      console.log('we made it');
      searchProductsByKeyword(action.keywords, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
