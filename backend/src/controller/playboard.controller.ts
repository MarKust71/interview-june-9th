import { Request, Response } from 'express';

import {
  checkMarkedSquares,
  initPlayBoard,
  resumePlayerSnapshot,
  savePlayerSnapshot,
} from '../service/playboard.service';

export const initPlayBoardHandler = () => {
  return initPlayBoard();
};

export const checkMarkedSquaresHandler = (req: Request, res: Response) => {
  const data = req.body;
  const { params } = req;

  if (params && params.mode === 'resume') {
    const result = resumePlayerSnapshot(data.name);

    return res.status(200).send(JSON.stringify(result)).end();
  }

  if (params && params.mode === 'snapshot') {
    const result = savePlayerSnapshot(data);

    return res.status(200).send(JSON.stringify(result)).end();
  }

  const result = checkMarkedSquares(data);

  return res.status(200).send(JSON.stringify(result)).end();
};
