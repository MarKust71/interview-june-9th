import { GameAction, GameActionType, ScoreBoardItem } from 'reducers/gameReducer.types';
import { SquareStatus, SquareType } from 'ui/square/Square.types';

export const initPlayBoard = (playBoard: SquareType[]): GameAction => ({
  type: GameActionType.INIT_PLAYBOARD,
  payload: { playBoard },
});

export const flipSquares = (squareIndex: number, squareStatus: SquareStatus): GameAction => ({
  type: GameActionType.FLIP_SQUARES,
  payload: { squareIndex, squareStatus },
});

/*
export const flipSquare = (squareIndex: number): GameAction => ({
  type: GameActionType.FLIP_SQUARE,
  payload: { squareIndex },
});
*/

export const markSquare = (squareIndex: number): GameAction => ({
  type: GameActionType.MARK_SQUARE,
  payload: { squareIndex },
});

/*
export const statusSquare = (squareIndex: number, squareStatus: SquareStatus): GameAction => ({
  type: GameActionType.STATUS_SQUARE,
  payload: { squareIndex, squareStatus },
});
*/

export const increaseScore = (): GameAction => ({
  type: GameActionType.INCREASE_SCORE,
  payload: {},
});

export const toggleGamePending = (): GameAction => ({
  type: GameActionType.TOGGLE_GAME_PENDING,
  payload: {},
});

export const updatePlayerName = (playerName: string): GameAction => ({
  type: GameActionType.UPDATE_PLAYER_NAME,
  payload: { playerName },
});

export const setGameIsOver = (): GameAction => ({
  type: GameActionType.GAME_OVER,
  payload: {},
});

export const updateScoreBoard = (scoreBoard: ScoreBoardItem[]): GameAction => ({
  type: GameActionType.UPDATE_SCOREBOARD,
  payload: { scoreBoard },
});
