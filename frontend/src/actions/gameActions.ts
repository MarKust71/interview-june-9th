import { GameAction, GameActionType } from 'reducers/gameReducer.types';

export const initPlayBoard = (): GameAction => ({
  type: GameActionType.INIT_PLAYBOARD,
  payload: {},
});

export const flipSquare = (squareIndex: number): GameAction => ({
  type: GameActionType.FLIP_SQUARE,
  payload: { squareIndex },
});
