export const SEARCH_PRODUCTS_BY_KEYWORD = "SEARCH_PRODUCTS_BY_KEYWORD";

export const RECEIVE_PRODUCT_SEARCH_RESULTS = "RECEIVE_PRODUCT_SEARCH_RESULTS";

export const searchProductsByKeyword = (keywords) => ({
  type: SEARCH_PRODUCTS_BY_KEYWORD,
  keywords
});

export const receiveProductSearchResults = (products) => ({
  type: RECEIVE_PRODUCT_SEARCH_RESULTS,
  products
});
