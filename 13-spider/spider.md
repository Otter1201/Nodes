# 網路爬蟲與 Web crawler
資料挖掘(Data mining)在Big data的時代變成一個熱門的議題，如何從網路上各處收集並下載資料，分析並找出趨勢，掌握未來的走向。
網路爬蟲顧名思義就是要到指定的網站上，進行資料挖掘或擷取，首先要建立與網站伺服器的連線，然後將資料下載回來。

## 網頁連線
nodejs內建的http核心模組，雖有提供API讓我們開發http伺服器與http客戶端應用程式，但他並不易用。因此，透過一個第三方模組 "request"讓我們更容易達成下載頁面內容的功能，並可以進行各種設定。

### 使用get方法
```js
# install request
user:~ $ npm install request

# Use get method to get the content
user:~ $ cat getGoogle.js

var re = require('request');

// download the website
re('https://www.google.com', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});
```

### 使用post方法
```js
# Use post method to get the content
user:~ $ cat post.js

var re = require('request');

// 1. make a new request object and use cookie
// 2. and follow redirect
var req = re.defaults({jar: true, followAllRedirects: true,});

// sent the user and password to the website
req.post ({
	url: 'https://www.facebook.com/?stype=lo&jlou=AfcP6RYCWQ_O5yFx-ZmVY4UMCTjfU3YAChpSP2iIPmWxQGatG2VbgpXZSxX1Fspt9LMX1Skcp93q5nnjVGsF2vrJDTneIE6mRIIh733Z6zRvQg&smuh=6353&lh=Ac8upbA_SuAhSE4m',
	form: {
		email: '{youremail@example.mail}', // check the "name" properity on the "username" column
		pass: '{password}'                 // the same
	}
}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
		}else{
			console.log(error, response.statusCode, response.statusMessage);
		}
	});
```
1. 有關cookie詳見下文
2. 一般在登入時有些網頁會進行重新導向(redirection)，此時若程式沒有追蹤資料重導向則會導致error302: Found, 可以簡單的理解為該資源原本確實存在，但已經被臨時改變了位置，詳見 [維基百科](https://zh.wikipedia.org/wiki/HTTP_302)
ref: http://stackoverflow.com/questions/7323932/how-do-you-follow-an-http-redirect-in-node-js

### 儲存 Cookie 和 Session 階段
Session技術指的是讓一隻爬蟲程式先通過一個線上服務的登入機制，然後才開始抓取資料，而背後支持Session技術的機制就是Cookie
由於 request 模組預設是關閉 Cookie 支援的，欲啟用則須先建立一個新的request物件，並設定jar參數。使用這個參數所建立的新request物件，可以讓後續所有的連線要求使用cookie。
```js
# Use Session and save the Cookie
user:~ $ cat cookie.js

var re = require('request');

// make a new request object and use cookie
var req = re.defaults({jar: true});

// request the page
req('https://www.google.com', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
});
```

## 解析網頁
第三方模組，cheerio提供了簡易的解析網頁內容，速度亦相當理想
```js
user:~ $ npm install cheerio
```

### get the data from the column
cheerio解析網頁可以使用selector來達成

```js
user:~ $ cat selector.js

var fs = require('fs');
var ch = require('cheerio');
var data = '<li class=\"apple\">Apple<li>' + '<li class=\"pple\">pple<li>';
var $ = ch.load(data);
console.log($('li.apple').text());

# Load html file
user:~ $ cat ex.html

<ul id="fruits">
	<li class="apple">Apple</li>
	<li class="orange">Orange</li>
	<li class="pear">Pear</li>
</ul>

user:~ $ cat selector.js

var fs = require('fs');      // fs to load .html file
var ch = require('cheerio');

var data = fs.readFile('ex.html', 'utf8', function (err,d) {
  if (err) {
    return console.log(err);
  }
  // console.log(d);
	var $ = ch.load(d);
	console.log($('li.apple').text());
});

user:~ $ node select.js
Apple
```























