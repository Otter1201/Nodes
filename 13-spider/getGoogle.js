var re = require('request');

// download the website
re('https://www.google.com', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});