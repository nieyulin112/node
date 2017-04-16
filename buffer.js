// Buffer就是缓冲
const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
// 获取四位的值
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);
const buf5 = Buffer.from('test');
console.log(buf5);
const buf6 = Buffer.from('tést', 'utf8');
console.log(buf6);

const buf = Buffer.from('hello world', 'ascii');
console.log('buf', buf.toString('hex'));
console.log('buf', buf.toString('base64'));

// 缓冲区和ES6迭代
const bufs = Buffer.from([1, 2, 3]);
bufs.forEach((val, index) => {
    console.log('val', val)
    console.log('index', index);
});
// Buffer的类方法的使用，buffer的使用


// 键值对
const buffer = Buffer.from('buffer');
console.log('buffer', buffer);
// buffer.entries()方法
for (const pair of buffer.entries()) {
    console.log('pair', pair);
}
// Buffer的from的方法 转换成16进制数字
console.log('buffer', Buffer.from('string'));
// buffer.from(arguments)
// arguments的参数是string, Buffer, ArrayBuffer, Array, array-like

const b = Buffer.from('22222');
console.log('b', b);
console.log('b', Buffer.byteLength('length'));


// includes
var inc = new Buffer('this is a buffer');
// 判断是否具有的方法：includes
console.log('includes', inc.includes('this is'));

console.log('keys', inc.keys());


const arrayLike = {'1': 'a', '2': 'b', '3': 'c', length: 5};
console.log('arrayLike', Buffer(arrayLike));
const ss = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log('json', json);


const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer'
    ? Buffer.from(value.data)
    : value;
});
console.log('copy', copy);
