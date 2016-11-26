export const SEARCH_PRODUCTS_BY_KEYWORD = "SEARCH_PRODUCTS_BY_KEYWORD";
export const FETCH_RECOMMENDED_PRODUCTS = "FETCH_RECOMMENDED_PRODUCTS";
export const RECEIVE_PRODUCT_SEARCH_RESULTS = "RECEIVE_PRODUCT_SEARCH_RESULTS";
export const ADD_PRODUCT_TO_DB = "ADD_PRODUCT_TO_DB";
export const RECEIVE_RECOMMENDED_PRODUCT_RESULTS = "RECEIVE_RECOMMENDED_PRODUCT_RESULTS";
export const ACCUMULATE_PRODUCT_SEARCH_RESULTS = "ACCUMULATE_PRODUCT_SEARCH_RESULTS";


export const searchProductsByKeyword = (keywords, searchNum, minPrice, maxPrice, category) => ({
  type: SEARCH_PRODUCTS_BY_KEYWORD,
  keywords,
  searchNum,
  minPrice,
  maxPrice,
  category
});

export const accumulateProductSearchResults = (products) => ({
  type: ACCUMULATE_PRODUCT_SEARCH_RESULTS,
  products
});

export const receiveProductSearchResults = (products) => ({
  type: RECEIVE_PRODUCT_SEARCH_RESULTS,
  products
});

export const receiveRecommendedProductResults = (products) => ({
  type: RECEIVE_RECOMMENDED_PRODUCT_RESULTS,
  products
});

export const addProductToDB = (product, wishlistItem) => ({
  type: ADD_PRODUCT_TO_DB,
  product,
  wishlistItem
});

export const fetchRecommendedProducts = () => ({
  type: FETCH_RECOMMENDED_PRODUCTS
});
