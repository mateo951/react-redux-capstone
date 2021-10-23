import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from './coins';

const reducer = combineReducers({
  coins: coinsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
