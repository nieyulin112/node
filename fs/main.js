var fs = require('fs');
fs.readFile('./index.js', 'utf8', function(err, data) {
	console.log(err, data);
});