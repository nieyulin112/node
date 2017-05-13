var fs = require('fs');
fs.writeFile('./test.txt', '这就是写文件', function (err) {
	if (err) {
		console.log('写文件失败');
	} else {
		console.log('写文件成功')
	}
});