import * as fromCounter from './counter';
import {combineReducers} from 'redux';

interface StoreState {
  counter: fromCounter.State;
}

export const reducers = combineReducers<StoreState>({
  counter: fromCounter.counterReducer
});
