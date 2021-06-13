import { Request, Response } from 'express';

import { addScoreBoard, readScoreBoard, writeScoreBoard } from '../service/scoreboard.service';

export const readScoreBoardHandler = () => {
  return readScoreBoard();
};

export const writeScoreBoardHandler = (req: Request, res: Response) => {
  const data = req.body;
  writeScoreBoard(data);
  return res.status(200).send('OK').end();
};

export const addScoreBoardHandler = (req: Request, res: Response) => {
  const data = req.body;
  addScoreBoard(data);
  return res.status(200).send('OK').end();
};
