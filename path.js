const path = require('path');
// basename()
let basename = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log('basename', basename);
// 基本的路径
console.log(process.env.PATH);
// delimiter split和join的应用
console.log(process.env.PATH.split(path.delimiter));
// extname
console.log(path.extname('index.html'));
// format
let format = path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
console.log('format', format);
// isAbsolute
console.log(path.isAbsolute('/a/b'));
// join
let x = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log('x', x);
// parse
let parse = path.parse('/home/user/dir/file.txt');
console.log('parse', parse);
