import { Express } from 'express';

import {
  addScoreBoardHandler,
  readScoreBoardHandler,
  writeScoreBoardHandler,
} from '../controller/scoreboard.controller';

export const routes = (app: Express) => {
  app.get('/api', (req, res) => res.send('Express + TypeScript Server'));

  app.get('/api/scoreboard', (req, res) => res.send(JSON.stringify(readScoreBoardHandler())));

  app.post('/api/scoreboard', writeScoreBoardHandler);

  app.post('/api/addscore', addScoreBoardHandler);
};
