import { receiveCurrentUser, receiveErrors, LOGIN, LOGOUT, SIGNUP } from '../actions/session_actions';
import { closeAuthModal } from '../actions/modals_actions';
import { login, signup, logout } from '../util/session_api_util';
import { hashHistory } from 'react-router';
import { fetchPendingRequests } from '../actions/friends_actions';

export default ({dispatch}) => next => action => {
  const loginSuccessCallback = user => {
    dispatch(closeAuthModal());
    dispatch(receiveCurrentUser(user));
    dispatch(fetchPendingRequests(user.id));
    hashHistory.push("/wishlists/0");
  };
  const logoutSuccessCallback = () => {
    hashHistory.push("/");
  };
  const errorCallback = err => {
    dispatch(receiveErrors(err.responseJSON));
  };
  switch(action.type) {
    case LOGIN:
      login(action.user, loginSuccessCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(logoutSuccessCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, logoutSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
