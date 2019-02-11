var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(uc('Stupid World, Stupid Me :P'));
    res.end()
}).listen(8080);