import { createStore, Store as ReduxStore } from 'redux';
import {counterReducer} from './reducers';

export namespace Store {

  export type Counter = { counterValue: number };

  export type All = {
    counter: Counter
  };
}

export const store: ReduxStore<Store.All> = createStore(counterReducer);
