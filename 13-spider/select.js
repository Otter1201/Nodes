var fs = require('fs');
var ch = require('cheerio');

var data = fs.readFile('ex.html', 'utf8', function (err,d) {
  if (err) {
    return console.log(err);
  }
  console.log(d);
	var $ = ch.load(d);
	console.log($);
});
// console.log(data);

// var fs = require('fs');
// var ch = require('cheerio');
// var data = '<li class=\"apple\">Apple<li>' + '<li class=\"pple\">pple<li>';
// var $ = ch.load(data);
// console.log($('li.apple').text());

