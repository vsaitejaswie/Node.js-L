var fs = require('fs');

fs.appendFile('update_file_1.txt', 'Updated the content by appending', function(err, file){
    if (err) throw error;
    console.log('Updated!');
});

fs.writeFile('update_file_2.txt', 'Update the file by writing to it', function(err, file){
    if (err) throw error;
    console.log('Updated!!');
});