var fs = require('fs');
var ch = require('cheerio');

var data = fs.readFile('ex.html', 'utf8', function (err,d) {
  if (err) {
    return console.log(err);
  }
  // console.log(d);
	var $ = ch.load(d);
	
	// Method 1
	console.log($('ul li').text());
	
	// Method 2: each method
	$('li').each(function(ind, el) {
		var i = $(el).text();
		console.log(i);
	});
});

// var fs = require('fs');
// var ch = require('cheerio');
// var data = '<li class=\"apple\">Apple<li>' + '<li class=\"pple\">pple<li>';
// var $ = ch.load(data);
// console.log($('li.apple').text());

