var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var handle = function(err){
        if (err) throw err;
        res.write('Click click click!');
    }
    eventEmitter.on('clickk', handle);
    eventEmitter.emit('clickk');
    //return res.end();
}).listen(8080);

/* when I include res.end(), it throws an error

Error: write after end

node.js is a non-blocking async platform.

end is called before the write is complete

CHECK! */