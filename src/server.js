const app = require('./app');

const normalizePort = val => {
    const port = Number.parseInt(val, 10);
    if (port >= 0) return port;
    return false;
};

const port = normalizePort(process.env.PORT || '3000');

export async function start() {
    try {
        await app.listen(port);
        console.log('Listening on port', port);
        await app.set('port', port);
    } catch (error) {
        console.log('Port configuration error', error);
    }
}
