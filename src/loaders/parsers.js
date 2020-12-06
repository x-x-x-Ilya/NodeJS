import express from 'express';
const app = express();

import cookieParser from 'cookie-parser';
import { json } from 'body-parser';

app.use(express.static('public'));
app.use(cookieParser());
app.use(json({ extended: false }));

export default app;
