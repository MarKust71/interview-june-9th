import { SquareStatus, SquareType } from 'ui/square/Square.types';

export type GameState = {
  playBoard?: SquareType[];
  squareIndex?: number;
  squareStatus?: SquareStatus;
  gameScore?: number;
  playerName?: string;
  gameIsPending?: boolean;
  gameIsOver?: boolean;
  scoreBoard?: ScoreBoardItem[];
  score?: ScoreBoardItem;
};

export type GameAction = {
  type: GameActionType;
  payload: GameState;
};

export enum GameActionType {
  INIT_PLAYBOARD = 'INIT_PLAYBOARD',
  FLIP_SQUARES = 'FLIP_SQUARES',
  FLIP_SQUARE = 'FLIP_SQUARE', // replace with FLIP_SQUARES
  MARK_SQUARE = 'MARK_SQUARE',
  STATUS_SQUARE = 'STATUS_SQUARE', // replace with FLIP_SQUARES
  INCREASE_SCORE = 'INCREASE_SCORE', // replace with FLIP_SQUARES
  TOGGLE_GAME_PENDING = 'TOGGLE_GAME_PENDING',
  UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME',
  GAME_OVER = 'GAME_OVER',
  UPDATE_SCOREBOARD = 'UPDATE_SCOREBOARD',
}

export type ScoreBoardItem = {
  name: string;
  score: number;
};
