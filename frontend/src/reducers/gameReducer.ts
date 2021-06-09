import { GameAction, GameActionType, GameState } from './gameReducer.types';
import { markProximity } from 'helpers/markProximity';

const initialState: GameState = {
  playBoard: [],
};

export const gameReducer = (state: GameState = initialState, action: GameAction) => {
  switch (action.type) {
    case GameActionType.INIT_PLAYBOARD: {
      const newPlayBoard = markProximity().sort((a, b) => {
        return parseInt(`${a.row}${a.column}`) - parseInt(`${b.row}${b.column}`);
      });
      return { ...state, playBoard: [...newPlayBoard] };
    }

    case GameActionType.FLIP_SQUARE: {
      const newPlayBoard = state.playBoard ? [...state.playBoard] : [];
      const { squareIndex } = action.payload;

      if (squareIndex === undefined) return state;

      newPlayBoard[squareIndex] = {
        ...newPlayBoard[squareIndex],
        revealed: !newPlayBoard[squareIndex].revealed,
      };
      return { ...state, playBoard: [...newPlayBoard] };
    }

    default:
      return state;
  }
};
