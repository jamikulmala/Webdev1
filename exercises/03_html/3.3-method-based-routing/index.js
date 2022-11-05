const http = require('http');
const fs = require('fs');
const path = require('path');

var server = http.createServer((request, response) => {
    if (request.method === 'GET'){
        readFileSendResponse('get.html',response)
    }
    else if (request.method === 'POST'){
        readFileSendResponse('post.html',response)
    }

    else{
        response.statusCode = 405;
        response.setHeader('Access-Control-Allow-Methods','Allow: GET, POST');
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

