import { GameAction, GameActionType } from 'reducers/gameReducer.types';

export const initPlayBoard = (): GameAction => ({
  type: GameActionType.INIT_PLAYBOARD,
  payload: {},
});

export const flipSquare = (squareIndex: number): GameAction => ({
  type: GameActionType.FLIP_SQUARE,
  payload: { squareIndex },
});

export const markSquare = (squareIndex: number): GameAction => ({
  type: GameActionType.MARK_SQUARE,
  payload: { squareIndex },
});

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
