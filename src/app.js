import express from 'express';
const app = express();
export default app;
import loaders from './loaders';

import modelsSynchronization from './database/database';
import start from './server';

app.use(loaders);
modelsSynchronization();
start();
console.log('app has been started...');
