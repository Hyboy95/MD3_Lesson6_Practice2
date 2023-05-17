const http = require('http');
const url = require('url');
const stringDecode = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
    let decoder = new stringDecode('utf-8');
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        res.end("Hello NodeJS!");
        console.log(buffer);
    });
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})