var fs = require('fs');
// 异步的读取数据
fs.readFile('./index.js', 'base64', function(err, data) {
	fs.writeFile('./test.txt', data, function (err) {
		console.log('读入成功');
	})
})
// fs.readFileSync('./index.js', 'hex', function (err, data) {
// 	console.log('data', data);
// })