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
      if (!action.payload.playBoard) return state;

      return { ...state, playBoard: [...action.payload.playBoard] };
    }

    case GameActionType.INCREASE_SCORE: {
      if (state.gameScore === undefined) return state;

      const gameScore = action.payload.gameScore || 0;
      return { ...state, gameScore: state.gameScore + gameScore + 1 };
    }

    case GameActionType.FLIP_SQUARES: {
      const newPlayBoard = state.playBoard ? [...state.playBoard] : [];
      const { squareIndex, squareStatus } = action.payload;

      if (squareIndex === undefined || squareStatus === undefined) return state;

      newPlayBoard[squareIndex] = {
        ...newPlayBoard[squareIndex],
        revealed: true,
        marked: false,
        status: squareStatus,
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
