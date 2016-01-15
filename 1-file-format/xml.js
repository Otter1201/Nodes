var xml2js = require('xml2js');
var xml = '<root>Hi Otter</root>';

xml2js.parseString(xml, function (err, result) {
	console.dir(result);
});