// this is base server
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// 相应的内容
	res.end('hello world');
}).listen(3000, '127.0.0.1');
// 提升自己的nodejs的技术
console.log('服务启动了');
