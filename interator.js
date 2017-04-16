// for of的使用
var buffer = Buffer('buffer');
for(const val of buffer.values()) {
    console.log('val', val);
}
for(const pair of buffer.entries()) {
    console.log(pair);
}
for (const key of buffer.keys()) {
    console.log('key', key);
}
// 技术的提升
const arrayLike = {'1': 'a', '2': 'b', '3': 'c', length: 5};
// 类数组的使用
console.log(Array.from(arrayLike));
