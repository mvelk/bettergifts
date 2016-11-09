export const searchProductsByKeyword = (keywords, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/product-search',
    data: { query: { keywords } },
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
