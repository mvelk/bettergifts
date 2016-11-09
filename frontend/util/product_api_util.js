export const searchProductsByKeyword = (keywords, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/product-search',
    data: { query: { keywords } },
    success,
    error
  });

};

export const addProductToDB = (product, wishlistId, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/products',
    data: { product: product, wishlistId: wishlistId },
    success,
    error
  });
};
