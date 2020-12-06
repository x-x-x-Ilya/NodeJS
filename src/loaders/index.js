import express from 'express';
const app = express();

import parsers from './parsers';
import passport from './passport';
import sync from '../database/models/sync';
import errorCatcher from '../middleware/error-handler';
import routes from '../routes';

sync();
app.use(parsers);
app.use(passport);
app.use(routes);
app.use(errorCatcher);

export default app;
