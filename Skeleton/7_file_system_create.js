var fs = require('fs');

// has flag as second argument
fs.open('create_file_1.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('Saved 1!');
});

// appends specified content to a file. If the file does not exist, the file will be created
fs.appendFile('create_file_2.txt', 'Hello Content!', function(err, file){
    if (err) throw err;
    console.log('Saved 2!');
});

// method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('create_file_3.txt', 'Write Content!', function(err){
    if (err) throw err;
    console.log('Saved 3!');
});