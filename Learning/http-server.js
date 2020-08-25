const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const obj = {
        country: 'Pakistan',
        capital: 'Islamabad',
        provinces: [
            { name: 'Punjab', capital: 'Lahore' },
            { name: 'Balochistan', capital: 'Quetta' },
            { name: 'KPK', capital: 'Peshawar' },
            { name: 'Sindh', capital: 'Karachi' }
        ]
    }

    response.end(JSON.stringify(obj));
});

server.listen(3001, () => console.log('Server started.'));