import { ACCUMULATE_PRODUCT_SEARCH_RESULTS, RECEIVE_PRODUCT_SEARCH_RESULTS, RECEIVE_RECOMMENDED_PRODUCT_RESULTS } from "../actions/product_actions";
import { LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';
export default (oldState = { product_search_results: [], recommended_products: []}, action) => {
  let newState;
  switch(action.type) {
    case LOGOUT:
      return { product_search_results: [], recommended_products: [] };
    case ACCUMULATE_PRODUCT_SEARCH_RESULTS:
      newState = merge({}, oldState);
      newState.product_search_results = [
        ...newState.product_search_results,
        ...action.products
      ];
      return newState;
    case RECEIVE_PRODUCT_SEARCH_RESULTS:
      newState = merge({}, oldState);
      newState.product_search_results = action.products;
      return newState;
    case RECEIVE_RECOMMENDED_PRODUCT_RESULTS:
      newState = merge({}, oldState);
      newState.recommended_products = action.products;
      return newState;
    default:
      return oldState;
  }
};
