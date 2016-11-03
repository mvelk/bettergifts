import { receiveCurrentUser, receiveErrors, LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { closeAuthModal } from '../actions/modals_actions';
import { login, signup, logout } from '../util/session_api_util';

export default ({dispatch}) => next => action => {
  console.log("we made it to the middleware");
  console.log(action.user);
  const successCallback = user => {
    dispatch(closeAuthModal());
    dispatch(receiveCurrentUser(user));
  };
  const errorCallback = err => {
    dispatch(receiveErrors(err.responseJSON));
  };
  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(()=> next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
