import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';


export default (state = { currentUser: {}, errors: [] }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, { currentUser: action.currentUser });
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state, { errors: action.errors });
      return newState;
    case LOGOUT:
      return { currentUser: {}, errors: [] };
    default:
      return state;
  }
};
