import { combineReducers } from 'redux';
import messages from './messagesReducer';

const appReducer = combineReducers({
  messages,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
