const http = require('http');
const port = 3000;

http.createServer((req, res) => {


  const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST , GET , HEAD',
      'Access-Control-Max-Age': '7200'
    };

  
  if(!req.headers['Origin']){

  if(req.method === 'GET' || req.method === 'POST'){
    res.writeHead(200,headers);
    res.write("I was requested using CORS!");
    res.end();
    return;
  }

  else if(req.method === 'HEAD'){
    res.writeHead(200,headers)
    res.end();
    return;
  }

  else{
    res.writeHead(405,headers);
    res.write("Request used a HTTP method which is not allowed.");
    res.end();
    return;
  }
}
else{
  res.writeHead(400,headers);
  res.write("Origin header not in the request.");
  res.end();
  return;
}

})

.listen(port);