# File format and Parsers

## JSON
```js
$ cat ex.json
{
	"model": "iPhone",
	"color": "gold",
	"price": "10000",
	"teset": {},
	"vendor": {
		"name": "Otter",
		"web": "",
		"tel": [
			"1234567",
			"7654321"
		]
	}
}

# Read JSON file
$ cat json-read.js
var fs = require('fs');
fs.readFile('./ex.json', 'utf8', function (err, data) {
	if (err)
		throw err;
	// a parser build in fs.js
	var obj = JSON.parse(data);
	console.log(obj);
})
$ node json-read.js
{
	"model": "iPhone",
	"color": "gold",
	"price": "10000",
	"teset": {},
	"vendor": {
		"name": "Otter",
		"web": "",
		"tel": [
			"1234567",
			"7654321"
		]
	}
}

# Write JSON file
$ cat json-write.js
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

$ node json-write.js
saved! 
```

## XML
eXtensible Markup Language, 可延伸標記式語言

```js
# install xml2js package
$ npm install xml2js

# 解析 xml file
$ cat xml.js
var xml2js = require('xml2js');
var xml = '<root>Hi Otter</root>';

xml2js.parseString(xml, function (err, result) {
	console.dir(result);
});

$ node xml.js
{ root: 'Hi Otter' }

# Advance for xml files
$ cat ex.xml
<prod>
	<item type="old">
		<name>Old car</name>
		<color>blue</color>
		<price>100</price>
	</item>
	<item type="new">
		<name>New car</name>
		<color>red</color>
		<price>10000</price>
	</item>
</prod>
```