import { RECEIVE_PRODUCT_SEARCH_RESULTS } from "../actions/product_actions";

export default (oldState = [], action) => {
  console.log(action);
  switch(action.type) {
    case RECEIVE_PRODUCT_SEARCH_RESULTS:
      console.log(action.products);
      return action.products;
    default:
      return oldState;
  }
};
