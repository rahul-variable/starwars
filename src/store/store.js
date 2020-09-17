'use strict';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers/reducers';
export const configureStore = (initialState) => {
  return createStore(combineReducers({ ...reducers }), initialState, applyMiddleware(thunk));
};
