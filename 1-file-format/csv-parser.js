var fs = require('fs');
var csv = require('csv-parser');

fs.FileReadStream('name.csv')
	.pipe(csv())
	.on('data', function (data) {
		console.log(data);
	});