import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
const successCallback = (data) => {
  console.log(data);
};

const errorCallback = (err) => {
  console.log(err);
};

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.successCallback = successCallback;
  window.errorCallback = errorCallback;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<h1>hello world</h1>, rootEl);
});
