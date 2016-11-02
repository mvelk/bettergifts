import { OPEN_AUTH_MODAL, CLOSE_AUTH_MODAL } from '../actions/modals_actions';
import { merge } from 'lodash';

export default (oldState = { auth: false }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case OPEN_AUTH_MODAL:
      newState = merge({}, oldState, { auth: true });
      return newState;
    case CLOSE_AUTH_MODAL:
      newState = merge({}, oldState, { auth: false });
      return newState;
    default:
      return oldState;
  }
};
