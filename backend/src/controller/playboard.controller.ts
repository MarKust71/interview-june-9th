import { Request, Response } from 'express';

import { checkMarkedSquares, initPlayBoard } from '../service/playboard.service';

export const initPlayBoardHandler = () => {
  return initPlayBoard();
};

export const checkMarkedSquaresHandler = (req: Request, res: Response) => {
  const data = req.body;
  const result = checkMarkedSquares(data);

  return res.status(200).send(JSON.stringify(result)).end();
};
