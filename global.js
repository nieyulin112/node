console.log('dirname', __dirname);
console.log('filename', __filename);
// 对当前模块的引用。特别 module.exports是用于定义模块导出和提供的内容require()。
// module 实际上并不是每个模块的全局而是本地的。
// console.log('cache', require.cache);
// 基本的开发
console.log('process', process);
