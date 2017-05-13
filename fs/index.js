var fs = require('fs');
var data = fs.readFileSync('../bar.js', 'utf8');
console.log('data', data);