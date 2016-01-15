var fs = require('fs');

fs.watch('aa', function(event, filename) {
	console.log(event, filename);
});