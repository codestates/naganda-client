import { combineReducers } from 'redux';
import user from './userReducer';
import listsReducer from './listsReducer';

const rootReducer = combineReducers({
  user,
  lists: listsReducer,
});

export default rootReducer;
