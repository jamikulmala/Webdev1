var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(JSON.stringify(request.headers));
    response.end();   
});

server.listen(3000);
