var http = require('http');

var server = http.createServer(function(request, response){
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write(body.split("").reverse().join(""));
        response.end();
    });
});

server.listen(3000);