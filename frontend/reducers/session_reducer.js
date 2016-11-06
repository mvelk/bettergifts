import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';


export default (oldState = { currentUser: {}, errors: {} }, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, { currentUser: action.currentUser });
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, oldState, { errors: action.errors });
      return newState;
    case LOGOUT:
      return { currentUser: {}, errors: {} };
    default:
      return oldState;
  }
};
