//问题场景：报错的时候项目报错
// FATAL ERROR: Ineffective
const v8 = require('v8');
// 查看项目使用堆内存大小 -- 以字节为单位
const memory = process.memoryUsage();
console.log(memory.heapTotal / 1024 / 1024, 'heapTotal表示V8引擎的堆内存总量')
console.log(memory.heapUsed / 1024 / 1024, 'heapUsed表示V8引擎已经使用的堆内存量')
console.log(memory.rss / 1024 / 1024, 'rss表示进程的常驻内存集大小。')

const v8ToalMemory = v8.getHeapSpaceStatistics()[0].space_size;
console.log(v8ToalMemory / 1024 / 1024, '输出当前进程的堆内存限制')