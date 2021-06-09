import { SquareType } from 'ui/square/Square.types';

export type GameState = {
  placebo?: string;
  playBoard?: SquareType[];
  squareIndex?: number;
};

export type GameAction = {
  type: GameActionType;
  payload: GameState;
};

export enum GameActionType {
  INIT_PLAYBOARD = 'INIT_PLAYBOARD',
  FLIP_SQUARE = 'FLIP_SQUARE',
}
