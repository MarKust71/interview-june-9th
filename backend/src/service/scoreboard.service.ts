import { db } from '../db';
import { ScoreBoardItem } from '../model';

export const readScoreBoard = () => {
  return db.read();
};

export const writeScoreBoard = (data: ScoreBoardItem[]) => {
  return db.write(data);
};

export const addScoreBoard = (data: ScoreBoardItem) => {
  return db.add(data);
};
