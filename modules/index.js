// 提升自己的学习的能力
var url = require('url');
var querystring = require('querystring');
console.log('querystring', querystring);
console.log('url', url);
console.log('parse', url.parse('https://baidu.com:8080/course/list?form = scotter'));
console.log('format', url.format('https://baidu.com:8080/course/list?form = scotter'));
