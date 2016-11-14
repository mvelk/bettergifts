export const fetchPastPurchases = (userId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/past-purchases/${userId}`,
    success,
    error
  });
};
export const fetchCommittedPurchases = (userId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/committed-purchases/${userId}`,
    success,
    error
  });
};
export const fetchReceivedGifts = (userId, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/received-gifts/${userId}`,
    success,
    error
  });
};
