var re = require('request');

// make a new request object and use cookie
var req = re.defaults({jar: true, followAllRedirects: true,});

// sent the user and password to the website
req.post ({
	url: 'https://www.facebook.com/?stype=lo&jlou=AfcP6RYCWQ_O5yFx-ZmVY4UMCTjfU3YAChpSP2iIPmWxQGatG2VbgpXZSxX1Fspt9LMX1Skcp93q5nnjVGsF2vrJDTneIE6mRIIh733Z6zRvQg&smuh=6353&lh=Ac8upbA_SuAhSE4m',
	form: {
		email: '{youremail@example.mail}',
		pass: '{password}'
	}
}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
		}else{
			console.log(error, response.statusCode, response.statusMessage);
		}
	});
