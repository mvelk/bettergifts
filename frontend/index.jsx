import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if (typeof window.currentUser !== "undefined") {
    const preloadedState = { session: {currentUser: window.currentUser, errors: {} }, modals: { auth: false, side: false } };
    console.log(preloadedState);
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.logout = logout;
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
