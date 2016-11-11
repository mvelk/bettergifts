import { RECEIVE_PRODUCT_SEARCH_RESULTS } from "../actions/product_actions";
import { LOGOUT } from '../actions/session_actions';
export default (oldState = [], action) => {
  switch(action.type) {
    case LOGOUT:
      return [];
    case RECEIVE_PRODUCT_SEARCH_RESULTS:
      return action.products;
    default:
      return oldState;
  }
};
