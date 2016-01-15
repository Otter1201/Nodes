var fs = require('fs');

// var content = fs.readFile('readFile.js');
// console.log(content.toString());

fs.readFile('readdir.js', function(data) {
	console.log(data.toString(data));
});