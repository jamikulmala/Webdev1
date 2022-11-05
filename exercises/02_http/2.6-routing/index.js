const http = require('http');
const fs = require('fs');
const path = require('path');

var server = http.createServer((request, response) => {
    if (request.url === '/classical'){
        readFileSendResponse('homer.html',response)
    }
    else if (request.url === '/dystopy'){
        readFileSendResponse('bradbury.html',response)
    }
    else if (request.url === '/'){
        readFileSendResponse('index.html',response)
    }
    else{
        response.statusCode = 404;
        response.statusMessage = 'Requested content not found';
        response.end();
    }


});

server.listen(3000);

const readFileSendResponse = (fileName, response) => {
    fs.readFile(path.resolve(fileName), function(error, file) {
      if (error) {
        response.writeHead(404);
        response.write('An error occured: ', error);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(file);
      }
      response.end();
    })
  }

