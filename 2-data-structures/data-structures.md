# Data Structure and Algorithms

## Arrays
在Javascript中建立陣列的方式有二，分別為以物件方式和以JSON表達式建立物件:

### 建立陣列
```js
// 以物件的方式建立:
var name = new Array();                      // 建立空陣列
var name = new Array('Otter', 'Cat', 'Dog'); // 建立有值陣列 

// 使用JSON表達式:
var name = [];                               // 建立空陣列
var name = ['Otter', 'Cat', 'Dog'];          // 建立有值陣列
```
### 元素的操作
```js
console.log(name[0]);  // 取出陣列中第一個值
for (var i in name) {  // 列出所有元素
	console.log(name[i]);
};
name[0] = 'Seal';      // 修改第一個元素內容
name.push('Rabbit');   // 新增一個元素
name.splice(1, 1);     // 從元素第二的位置起，刪除1個元素
name.indexOf('Otter'); // 尋找元素位置
// 元素不存在則顯示為-1
name.length;           //取得元素長度
```

## Stacks
將資料一層層堆疊起來，讀取時從最外的一層資料開始處理，屬於先進後出(LIFO, Last In First Out)的機制。
運用陣列，從最後一個元素取得資料，並刪除該元素即可實做堆疊，可以使用pop()方法:

```js
// 將資料送進array:
var name = []
name.push('A');
name.push('B');
name.push('C');
name.push('Otter');
name.push('Cat');

// 取得最後送入的元素，並從array刪除之:
var first = name.pop();
console.log(first);
var second = name.pop();
console.log(decond);
// 以此類推...
```

## Queue
佇列是屬於先進先出(FIFO, First In First Out)的機制，在Javascript中常用shift()方法:

```js
// 將資料送進array:
var name = []
name.push('A');
name.push('B');
name.push('C');
name.push('Otter');
name.push('Cat');

// 取得最先送入的元素，並從array刪除之:
var first = name.shift();
console.log(first);
var second = name.shift();
console.log(decond);
// 以此類推...
```

## Dictionary & Hash Table
字典和雜湊表使用的都是key/value形式儲存的資料結構，形成一對一查表對應機制。而雜湊表針對key進行處理或加密生成一定長度的編碼，進一步提升安全性與查詢速度

```js
// Make a dictionary
var dict = {
	A: 'a',
	B: 'b',
	C: 'c',
	Otter: 'otter'
};
console.log(dict['B']); // show B's value

$ npm install hashtable
$ cat hash.js
var ht = require('hashtable');
var table = newe HashTable();

table.put('A', 'a');
console.log(table['A']);

$ node hash.js
a
```

## Sort
```js
$ cat sort.js
var a = [
	'Fred',
	'Otter',
	'Cat',
	'Dog'
];

console.log(a.sort());

$node sort.js
['Cat', 'Dog', 'Fred', 'Otter']
```

## Neural Network
神經網路是模仿大腦神經元使機器進行學習判斷，屬於人工智慧的一種，本身不具備任何能力但具有學習機能，以下範例為訓練機器判斷深色背景須顯示淺色文字，反之亦然。
```js
$ npm install brain

$ cat brain.js
var brain = require('brain');

// Build Neural Network
var net = new brain.NeuralNetwork();

// Input datas net.train();
net.train([
	{
		input: {r: 0.03, g:0.7, b: 0.5},
		output: {black: 1}
	},
	{
		input: {r: 0.16, g:0.09, b: 0.2},
		output: {white: 1}
	},
	{
		input: {r: 0.5, g:0.5, b: 1},
		output: {white: 1}
	}
]);

// Outputs net.run();
console.log(net.run({r: 1, g: 0.4, b: 0}));

$ node brain.js
{black: 0.01826..., white: 0.98190...}
// 每次執行結果不盡相同
```