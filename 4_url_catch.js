var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

//The address:

//http://localhost:8080/summer
//http://localhost:8080/winter