import { RECEIVE_SESSION_ERROR, RECEIVE_CURRENT_USER } from '../actions/session_action';

export const sessionErrorsReducer = (state = [], action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      return action.error;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
