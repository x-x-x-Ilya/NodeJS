import app from './app';

const normalizePort = val => {
    const port = Number.parseInt(val, 10);

    if (port > 0) return port;

    return false;
};

const port = normalizePort(process.env.PORT || '3000');

export default async function start() {
    try {
        app.listen(port);
        app.set('port', port);
        console.log(`app listen ${port} port`);
    } catch (error) {
        console.log('Port configuration error', error);
    }
}
