const express = require('express');
const app = express();

const parsers = require('./parsers');
const passport = require('./passport');
const Models = require('../database/models/index');
const errorCatcher = require('../middleware/error-handler');
const routes = require('../routes/index');
const deletePost = require('../middleware/AutoDeletingPosts');

app.use(parsers);
app.use(passport);
Models.init();
app.use(routes);
app.use(errorCatcher);
deletePost.autoDel();

module.exports = app;
