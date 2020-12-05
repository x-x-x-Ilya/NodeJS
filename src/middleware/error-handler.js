import createError from 'http-errors';
import express from 'express';

const app = express();

export function errorHandler() {
    app.use((req, res, next) => {
        next(createError(404));
    });
    // error handler
    app.use((err, req, res) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.send('error');
    });
}

export default app;
