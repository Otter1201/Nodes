var fs = require('fs');
var ini = require('ini');

// Read ini file
fs.readFile('./demo.ini', 'utf-8', function(err, data) {
	// Analysis format
	var config = ini.parse(data);
	// Print out
	console.log(config.general.name);
	console.log(config.contact.phone[0]);

});
