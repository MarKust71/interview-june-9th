import { db } from '../db';
import { PlayBoardSnapshot } from '../model/playBoard.model';

export const initPlayBoard = () => {
  return db().init();
};

export const checkMarkedSquares = (data: PlayBoardSnapshot) => {
  db().saveSnapshot(data);
  return db().check(data.marked);
};
