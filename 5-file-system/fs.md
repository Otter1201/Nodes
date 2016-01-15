# File System
JS原本設計為在瀏覽器上執行，較為缺乏關於檔案系統的操作，當需要進入後端開發時對於檔案系統的支援變的必要，Node.js內建一個fs的核心模組提供檔案I/O操作

```js
var fs = require('fs');
```
涉及I/O操作就會產生阻塞的問題，尤其JS以事件驅動的方式必然有極大影響，因 此fs模組提供了同步(阻塞)與非同步(非阻塞，建議使用)兩種方法

## List directory
```js
// 非同步 read directory .readdir();
var fs = require('fs');

fs.readdir('/etc', function(err, f) {
	if (err) {
		console.log(err);
		return;
	}
	for (var i in f) {
		console.log(f[i]);
	}
});

// 同步 .readdirSync();
var fs = require('fs');
var f = fs.readdirSync('/etc');

for (var i in f) {
		console.log(f[i]);
};
```

## 操作檔案
```js
var f = require('fs');

// 檢查檔案是否存在 .exists();
f.exists('/tmp', function(exist) {
	console.log(exist);
});

// 刪除檔案 .unlink();
f.unlink('/tmp/try', function(err) {
	if (err) {
		console.error(err);
		return;
	}

console.log('Removed!');
});

// 刪除目錄 .rmdir();
var fs = require('fs');

fs.rmdir('./test_dir', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Removed');
});
// .rmdir(); method can only remove the empty directory
// 要刪除欄有檔案的目錄必須先list所有檔案並且一一刪除

// 刪除整個目錄 fs-extra.remove();
$ npm install fs-extra
$ cat remove.js
var fse = require('fs-extra');
fse.remove('test_dir');

// rename .rename();
var fs = require('fs');
fs.rename('test.old', 'test.new');
// rename 可用在檔案或目錄，目錄使否為空都可行
```

## 監控目錄及檔案
為了要追蹤目錄或檔案是否有被變更，傳統上採用輪詢(Polling)的方式，即為不斷去檢查檔案或目錄，確認是否有被新增刪除或修改，但是此法效能較差，若是可以，近可能採用作業系統提供的監控API
Node.js將監控API內建在核心模組fs，可直接用.watch(); method實現之。

```js
var fs = require('fs');

fs.watch('aa', function(event, filename) {
	console.log(event, filename);
});
```

## 讀寫檔案
常用讀取資料的方式有readFile, readFileSync, createReadStream三種
```js

```