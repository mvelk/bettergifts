export const FETCH_PAST_PURCHASES = "FETCH_PAST_PURCHASES";
export const FETCH_COMMITTED_PURCHASES = "FETCH_COMMITTED_PURCHASES";
export const FETCH_RECEIVED_GIFTS = "FETCH_RECEIVED_GIFTS";

export const RECEIVE_PAST_PURCHASES = "RECEIVE_PAST_PURCHASES";
export const RECEIVE_COMMITTED_PURCHASES = "RECEIVE_COMMITTED_PURCHASES";
export const RECEIVE_RECEIVED_GIFTS = "RECEIVE_RECEIVED_GIFTS";

export const fetchPastPurchases = (userId) => ({
  type: FETCH_PAST_PURCHASES,
  userId
});

export const fetchCommittedPurchases = (userId) => ({
  type: FETCH_COMMITTED_PURCHASES,
  userId
});

export const fetchReceivedGifts = (userId) => ({
  type: FETCH_RECEIVED_GIFTS,
  userId
});

export const receivePastPurchases = (purchases) => ({
  type: RECEIVE_PAST_PURCHASES,
  purchases
});
export const receiveCommittedPurchases = (purchases) => ({
  type: RECEIVE_COMMITTED_PURCHASES,
  purchases
});
export const receiveReceivedGifts = (gifts) => ({
  type: RECEIVE_RECEIVED_GIFTS,
  gifts
});
