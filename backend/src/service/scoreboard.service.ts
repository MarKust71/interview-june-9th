import { db } from '../db';
import { ScoreBoardItem } from '../model/scoreBoard.model';

export const readScoreBoard = () => {
  return db().read();
};

export const writeScoreBoard = (data: ScoreBoardItem[]) => {
  return db().write(data);
};

export const addScoreBoard = (data: ScoreBoardItem) => {
  db().deleteUserSnapshot(data.name);
  return db().add(data);
};
