const querystring = require('querystring');
let s = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
console.log('s', s);
