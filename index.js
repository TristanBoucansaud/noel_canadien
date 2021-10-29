const http = require('http');
const fs = require('fs');
const app = require('./app');


const host = '0.0.0.0';
const port = 80;

app.set('port', port);
const server = http.createServer(app);

server.listen(port, host, () => {
    console.log('Started HTTP Server @ ' + host + ":" + port);
});
