import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorReducer from './error_reducer';
import  sessionReducer  from './session_reducer';

export default combineReducers({
  entities: entitiesReducer,
  errors: errorReducer,
  session: sessionReducer,
});
