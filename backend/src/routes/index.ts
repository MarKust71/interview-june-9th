import { Express } from 'express';

import {
  addScoreBoardHandler,
  readScoreBoardHandler,
  writeScoreBoardHandler,
} from '../controller/scoreboard.controller';
import { checkMarkedSquaresHandler, initPlayBoardHandler } from '../controller/playboard.controller';

export const routes = (app: Express) => {
  app.get('/api', (req, res) => res.send('Express + TypeScript Server'));

  app.get('/api/scoreboard', (req, res) => res.send(JSON.stringify(readScoreBoardHandler())));

  app.post('/api/scoreboard', writeScoreBoardHandler);

  app.post('/api/addscore', addScoreBoardHandler);

  app.get('/api/playboard', (req, res) => res.send(JSON.stringify(initPlayBoardHandler())));

  app.post('/api/playboard', checkMarkedSquaresHandler);
};
