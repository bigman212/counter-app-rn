import {Action, ActionTypes} from '../actions/actions';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0
};

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