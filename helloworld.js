var http = require('http');

var port = 45454;
http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Hello from Node.JS</h1>');
}).listen(port);

console.log(`Listening at ${port}. Press CTRL+C to stop listening...`);