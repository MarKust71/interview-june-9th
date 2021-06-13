import { db } from '../db';
import { PlayBoardSnapshot } from '../model/playBoard.model';

export const initPlayBoard = () => {
  return db().init();
};

export const checkMarkedSquares = (data: number[]) => {
  // db().saveSnapshot(data);

  return db().check(data);
};

export const resumePlayerSnapshot = (playerName: string) => {
  return db().getPlayerSnapshot(playerName);
};

export const savePlayerSnapshot = (data: PlayBoardSnapshot) => {
  return db().saveSnapshot(data);
};
