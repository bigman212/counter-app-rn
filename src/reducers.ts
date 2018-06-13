import {Store} from './Store';
import {ActionTypes, TypeKeys} from './actions';

export interface StoreState {
  counterValue: number;
}

const initialState: Store.Counter = {
  counterValue: 0
};

export function counterReducer(state: Store.Counter = initialState, action: ActionTypes): Store.Counter {
  const { counterValue } = state;
  switch (action.type) {
    case TypeKeys.INC:
      const newValue = counterValue + action.by;
      return { ...state, counterValue: newValue };
  }
  return state;
}