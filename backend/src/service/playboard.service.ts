import { db } from '../db';

export const initPlayBoard = () => {
  return db().init()
}
