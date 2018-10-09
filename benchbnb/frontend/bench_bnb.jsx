import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login } from './actions/session_action';
import { configureStore } from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  const user1 = { username: 'hello', password: '123456', };
  window.user1 = user1;
  window.store = store;
  window.login = login;
  window.signup = signup;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);
});
