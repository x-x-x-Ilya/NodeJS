const parsers = require('./parsers');
const passport = require('./passport');
const Models = require('../database/models/index');
const ErrorHandler = require('../middleware/error-handler').ErrorHandler;
const NotFound = require('../middleware/error-handler').NotFound;
const routes = require('../routes/index');
const deletePost = require('../middleware/AutoDeletingPosts');

module.exports = (app) => {
    parsers(app);
    Models.init();
    app.use(passport);
    app.use(routes);
    app.use(NotFound);

    app.use((req, res, next) =>
    {
        console.log("hello");
        next();
    });
    app.use(ErrorHandler);
    //app.use(deletePost);
};