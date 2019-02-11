var fs = require('fs');
var rs = fs.createReadStream('./demofile.html');
rs.on('open', function(){
    console.log('The file is open');
});

