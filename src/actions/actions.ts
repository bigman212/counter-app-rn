export enum ActionTypes {
  INC = 'INC',
  DEC = 'DEC'
}

export interface IncrementAction {
  type: ActionTypes.INC;
}

export interface DecrementAction {
  type: ActionTypes.DEC;
}

export type Action = IncrementAction | DecrementAction;

export function incCounter(): IncrementAction {
  return {
    type: ActionTypes.INC
  };
}

export function decCounter(): DecrementAction {
  return {
    type: ActionTypes.DEC
  };
}