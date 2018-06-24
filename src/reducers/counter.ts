import {Action, ActionTypes} from '../actions/actions';
import StorageInstance from '../storage/Storage';
import {Constants} from '../constants';

export interface State {
  value: number;
  fetched: boolean;
}

function getInitialState(): State {
  const state: State = {value: 0, fetched: false};
  StorageInstance.getInstance().getItem(Constants.Storage.COUNTER_VALUE_KEY)
    .then(value => {
      state.value = Number(value);
      state.fetched = true;
      console.log("yes!!!!!!!!");
    });
  return state;
}

const initialState: State = getInitialState();

export function counterReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.INC: {
      let valueBy = state.value;
      valueBy++;
      return {
        ...state,
        value: valueBy
      };
    }

    case ActionTypes.DEC: {
      let valueBy = state.value;
      if (valueBy >= 0) valueBy--;
      return {
        ...state,
        value: valueBy
      };
    }

    default:
      return state;
  }
}