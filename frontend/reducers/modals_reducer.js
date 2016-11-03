import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL,
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER } from '../actions/modals_actions';

import { merge } from 'lodash';

export default (oldState = { auth: false, side: false }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
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
    default:
      return oldState;
  }
};
