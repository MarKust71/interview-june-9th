import { db } from '../db';

export const initPlayBoard = () => {
  return db().init();
};

export const checkMarkedSquares = (data: number[]) => {
  return db().check(data);
};
