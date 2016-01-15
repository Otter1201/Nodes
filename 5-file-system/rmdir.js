var fs = require('fs');

fs.rmdir('./test_dir', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Removed');
});