import {Store} from './Store';

export enum TypeKeys {
  INC = 'INC',
  DEC = 'DEC'
}

export interface IncrementAction {
  type: TypeKeys.INC;
  by: number;
}

export interface DecrementAction {
  type: TypeKeys.DEC;
  by: number;
}

export type ActionTypes = IncrementAction | DecrementAction;

export const incrementCounter = (by: number): IncrementAction => ({
  type: TypeKeys.INC,
  by
});