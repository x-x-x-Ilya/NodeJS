import express from 'express';
const app = express();
export default app;
import loaders from './loaders';

import { authentication, ModelsSynchronization } from './database/database';
import { start } from './server';

app.use(loaders);
authentication();
ModelsSynchronization();
start();
