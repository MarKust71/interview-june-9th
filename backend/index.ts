import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { log } from './src/logger';
import { routes } from './src/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  log.info(`️[server]: Server is running at https://localhost:${PORT}`);
  routes(app);
});
