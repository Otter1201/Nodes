var fs = require('fs');

var obj = {
	a: "b",
	c: [
		'd',
		'e'
	]
};

fs.writeFile('./saved.json', JSON.stringify(obj), function (err) {
	if (err)
		throw err;
	console.log('saved!');
})