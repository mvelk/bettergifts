import {
  OPEN_USER_SEARCH_FORM_MODAL,
  CLOSE_USER_SEARCH_FORM_MODAL,
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL,
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  OPEN_WISHLIST_FORM_MODAL,
  CLOSE_WISHLIST_FORM_MODAL,
  OPEN_WISHLIST_ITEM_FORM_MODAL,
  CLOSE_WISHLIST_ITEM_FORM_MODAL } from '../actions/modals_actions';

import { merge } from 'lodash';

export default (oldState = { auth: false, side: false , wishlist: false, wishlistItem: false, userSearch: false }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case OPEN_USER_SEARCH_FORM_MODAL:
      newState = merge({}, oldState, { userSearch: true });
      return newState;
    case CLOSE_USER_SEARCH_FORM_MODAL:
      newState = merge({}, oldState, { userSearch: false });
      return newState;
    case OPEN_AUTH_MODAL:
      newState = merge({}, oldState, { auth: true });
      return newState;
    case CLOSE_AUTH_MODAL:
      newState = merge({}, oldState, { auth: false });
      return newState;
    case OPEN_SIDE_DRAWER:
      newState = merge({}, oldState, { side: true });
      return newState;
    case CLOSE_SIDE_DRAWER:
      newState = merge({}, oldState, { side: false });
      return newState;
    case OPEN_WISHLIST_FORM_MODAL:
      newState = merge({}, oldState, { wishlist: true });
      return newState;
    case CLOSE_WISHLIST_FORM_MODAL:
      newState = merge({}, oldState, { wishlist: false });
      return newState;
    case OPEN_WISHLIST_ITEM_FORM_MODAL:
      newState = merge({}, oldState, { wishlistItem: true });
      return newState;
    case CLOSE_WISHLIST_ITEM_FORM_MODAL:
      newState = merge({}, oldState, { wishlistItem: false });
      return newState;
    default:
      return oldState;
  }
};
