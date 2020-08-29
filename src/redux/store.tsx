import {
  combineReducers,
  ReducersMapObject,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import {UserState, userReducer} from './user';

export interface ReducerState {
  userState: UserState;
}

const reducersMap: ReducersMapObject<ReducerState> = {
  userState: userReducer,
};

const reducers = combineReducers(reducersMap);
const middlewares = [thunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
