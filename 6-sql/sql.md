# SQL
資料庫系統的發展，從最簡單的檔案式資料庫(File-based)，鍵值配對式資料庫(key-value pair)，關聯式資料庫(RDBMS)，以及後來介於不同類型間的複合式資料庫(NoSQL)等等。

## MySQL
原為開源的關聯式資料庫管理系統，具有高性能、低成本、可靠性佳等優勢，已經成為最流行之關聯式資料庫，廣泛被應用在中小行網站中。

### install mysql
$ npm install mysql
### link to mysql
$ cat connect.js
```js
var mysql = require('mysql');
// create a connection, set the host, user and the password
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'otter',
	password: 'otter123',
	//port: '3308'
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
``` 


## MS SQL Server

## PostgreSQL

## Redis

## MongoDB

## LevelDB

## SQLite