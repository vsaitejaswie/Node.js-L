var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Host: ' + q.host);
    res.write('Pathname: '+ q.pathname);
    res.write('Search String: ' + q.search);

    var qdata = q.query.month;
    res.write(qdata); // Query Result ***We cannoth write q.query as an argument to the res.write() function because it does not return a string or buffer, it returns an object, a format which the write function cannot handle***
    res.write(q.query.month); // Retrieve Specific Key-Valu pair 1
    res.write(q.query.year); // Retrieve Specific Key-Valu pair 2
    res.end();
}).listen(8080);
