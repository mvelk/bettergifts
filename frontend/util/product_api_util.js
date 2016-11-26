export const searchProductsByKeyword = (keywords, search_num, min_price, max_price, category, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/product-search',
    data: { query: { keywords, search_num, min_price, max_price, category } },
    success,
    error
  });

};

export const fetchRecommendedProducts = (success, error) => {
  $.ajax({
    method: 'get',
    url: '/api/recommended-products',
    success,
    error
  });

};

export const addProductToDB = (product, wishlistItem, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/products',
    data: { product: product, wishlist_item: wishlistItem },
    success,
    error
  });
};
