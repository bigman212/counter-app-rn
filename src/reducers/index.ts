import * as fromCounter from './counter';
import {combineReducers} from 'redux';

export interface State {
  counter: fromCounter.State;
}

export const reducer = combineReducers<State>({
  counter: fromCounter.counterReducer
});
