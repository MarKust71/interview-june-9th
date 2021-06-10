import { SquareType } from 'ui/square/Square.types';

export type GameState = {
  playBoard?: SquareType[];
  squareIndex?: number;
  gameScore?: number;
  playerName?: string;
  gameIsPending?: boolean;
};

export type GameAction = {
  type: GameActionType;
  payload: GameState;
};

export enum GameActionType {
  INIT_PLAYBOARD = 'INIT_PLAYBOARD',
  FLIP_SQUARE = 'FLIP_SQUARE',
  MARK_SQUARE = 'MARK_SQUARE',
  INCREASE_SCORE = 'INCREASE_SCORE',
  TOGGLE_GAME_PENDING = 'TOGGLE_GAME_PENDING',
  UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME',
}