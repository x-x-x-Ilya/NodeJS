import express from 'express';
const app = express();

import passport from '../middleware/passport-middleware';
import session from 'express-session';
app.use(session({ secret: 'cats', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

export default app;
