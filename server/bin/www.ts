import * as http from 'http';
import { from } from 'rxjs';
import { SERVER_PORT } from '../config'
import app from '../app'
import { normalize } from 'path';

// ポートの設定
const port = normalizePort(process.env.PORT || SERVER_PORT);
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API runnning on localhost:${port}`));
server.on('error', onError);
server.on('listening', onListening);



function normalizePort(val): number|string|boolean {
    const normalizedPort: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if(isNaN(normalizedPort))
        return val;
    if(normalizedPort >= 0)
        return normalizedPort;

    
    return false;
}

function onError(error): void {
    if(error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
}


