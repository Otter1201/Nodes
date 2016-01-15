var mysql = require('mysql');
// create a connection, set the host, user and the password
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'otter',
	password: 'otter123',
	port: '3306'
});

// start to connect
connection.connect (function(err) {
	// print the error message
	if (err) {
		// throw err;
		console.log(err);
		return;
	}

	// connected successfully!
	console.log('connected successfully!');
	// close connection
	connection.end();
});