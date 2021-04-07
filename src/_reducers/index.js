import { combineReducers } from 'redux';
import user from './userReducer';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  user,
  lists: listsReducer,
  cards: cardsReducer,
});

export default rootReducer;
