var re = require('request');

// make a new request object and use cookie
var req = re.defaults({jar: true});

// request the page
req('https://www.google.com', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});