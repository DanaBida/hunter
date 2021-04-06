import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunkMiddleware];

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
}
