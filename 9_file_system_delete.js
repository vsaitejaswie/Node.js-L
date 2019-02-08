var fs = require('fs');

fs.unlink('create_file_3.txt', function(err, file){
    if (err) throw err;
    console.log("Create file 3 is deleted!");
});

// Rename
fs.rename('create_file_2.txt', 'second_file_created.txt', function(err, file){
    if (err) throw err;
    console.log("Create File 2 name has been changed!");
});