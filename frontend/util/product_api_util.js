export const searchProductsByKeyword = (keywords, success, error) => {
  $.ajax({
    method: 'post',
    url: '/api/product-search',
    data: { query: { keywords } },
    success,
    error
  });
};
