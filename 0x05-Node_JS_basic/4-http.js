const http = require('http');
const { homedir } = require('os');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
    process.stdout.write(`Server listening at -> https://${HOST}:${PORT}\n`);
});

module.exports = app;