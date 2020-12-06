import express from 'express';
const app = express();

import parsers from './parsers';
import passport from './passport';
import init from '../database/models';
import errorCatcher from '../middleware/error-handler';
import routes from '../routes';

app.use(parsers);
app.use(passport);
init();
app.use(routes);
app.use(errorCatcher);

export default app;
