export const searchProductsByKeyword = (keywords, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/product-search',
    data: { query: { keywords } },
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
