var f = require('fs');

// 檢查檔案是否存在
f.exists('/tmp', function(exist) {
	console.log(exist);
});

// 刪除檔案
f.unlink('a.txt', function(err) {
	if (err) {
	console.error(err);
	return;
}

console.log('Removed!');
});