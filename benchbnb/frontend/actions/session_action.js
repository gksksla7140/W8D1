import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionError = (error) => ({
  type: RECEIVE_SESSION_ERROR,
  error,
});

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(
  user => dispatch(receiveCurrentUser(user)),
  error => dispatch(receiveSessionError(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(()=> dispatch(logoutCurrentUser()))
);

export const login = (user) => dispatch => (
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user))),
  error =>
   (dispatch(receiveSessionError(error.responseJSON)))

);