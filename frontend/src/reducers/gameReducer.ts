import { markProximity } from 'helpers/markProximity';

import { GameAction, GameActionType, GameState } from './gameReducer.types';

const initialState: GameState = {
  playBoard: [],
  gameScore: 0,
  playerName: '',
  gameIsPending: false,
  gameIsOver: false,
  scoreBoard: [],
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

    case GameActionType.MARK_SQUARE: {
      const newPlayBoard = state.playBoard ? [...state.playBoard] : [];
      const { squareIndex } = action.payload;

      if (squareIndex === undefined) return state;

      newPlayBoard[squareIndex] = {
        ...newPlayBoard[squareIndex],
        marked: !newPlayBoard[squareIndex].revealed && !newPlayBoard[squareIndex].marked,
      };

      return { ...state, playBoard: [...newPlayBoard] };
    }

    case GameActionType.INCREASE_SCORE: {
      if (state.gameScore === undefined) return state;

      return { ...state, gameScore: state.gameScore + 1 };
    }

    case GameActionType.TOGGLE_GAME_PENDING: {
      return { ...state, gameIsPending: !state.gameIsPending };
    }

    case GameActionType.UPDATE_PLAYER_NAME: {
      return { ...state, playerName: action.payload.playerName };
    }

    case GameActionType.GAME_OVER: {
      return { ...state, gameIsOver: true };
    }

    case GameActionType.UPDATE_SCOREBOARD: {
      return { ...state, scoreBoard: action.payload.scoreBoard };
    }

    default:
      return state;
  }
};
