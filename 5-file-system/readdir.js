var fs = require('fs');

fs.readdir('.', function(err, f) {
	if (err) {
		console.log(err);
		return;
	}
	for (var i in f) {
		console.log(f[i]);
	}
});