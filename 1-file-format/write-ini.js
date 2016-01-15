var fs = require('fs');
var ini = require('ini');

// ini info
var config = {
	general: {
		name: 'Otter'
	},
	contact: {
		email: 'otter@home.mail',
		phone: [
			'AAAA',
			'BBBB'
		]
	}
};

// Save
fs.writeFile('./output.ini', ini.stringify(config),
	function(err) {
		if (err)
			console.log('Failed');
		else
			console.log('Saved');
	})