import {
  FETCH_PAST_PURCHASES,
  FETCH_RECEIVED_GIFTS,
  FETCH_COMMITTED_PURCHASES,
  receivePastPurchases,
  receiveCommittedPurchases,
  receiveReceivedGifts } from '../actions/purchase_actions';

import {
  fetchPastPurchases,
  fetchReceivedGifts,
  fetchCommittedPurchases } from '../util/purchases_api_util';

export default ({dispatch}) => next => action => {
  const receivePastPurchasesCallback = (purchases) => {
    dispatch(receivePastPurchases(purchases));
  };
  const receiveCommittedPurchasesCallback = (purchases) => {
    dispatch(receiveCommittedPurchases(purchases));
  };
  const receiveReceivedGiftsCallback = (gifts) => {
    dispatch(receiveReceivedGifts(gifts));
  };
  const errorsCallback = (err) => {
    console.log(err.responseJSON);
  };
  console.log(action);
  switch(action.type) {
    case FETCH_PAST_PURCHASES:
      fetchPastPurchases(action.userId, receivePastPurchasesCallback, errorsCallback);
      return next(action);
    case FETCH_COMMITTED_PURCHASES:
      fetchCommittedPurchases(action.userId, receiveCommittedPurchasesCallback, errorsCallback);
      return next(action);
    case FETCH_RECEIVED_GIFTS:
      fetchReceivedGifts(action.userId, receiveReceivedGiftsCallback, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};
