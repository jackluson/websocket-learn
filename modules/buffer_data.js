var logger = console.log;

// 基本的二进制对象是 ArrayBuffer —— 对固定长度的连续内存空间的引用
let buffer = new ArrayBuffer(16); // 创建一个长度为 16 的 buffer
logger(buffer.byteLength); // 16

// 视图对象基本demo
// let buffer = new ArrayBuffer(16); // 创建一个长度为 16 的 buffer

let view = new Uint32Array(buffer); // 将 buffer 视为一个 32 位整数的序列

logger(Uint32Array.BYTES_PER_ELEMENT); // 每个整数 4 个字节

logger(view.length); // 4，它存储了 4 个整数
logger(view.byteLength); // 16，字节中的大小

// 让我们写入一个值
view[0] = 512;
console.log("view", view);

// 遍历值
for (let num of view) {
  logger(num); // 123456，然后 0，0，0（一共 4 个值）
}

// 类型化数组视图
/*
new TypedArray(buffer, [byteOffset], [length]);
new TypedArray(object);
new TypedArray(typedArray);
new TypedArray(length);
new TypedArray();
*/
// 创建

// 1. 偏移
// var viewUnit8 = new Uint8Array(buffer, 1, 10);
// console.log(viewUnit8);
// console.log(viewUnit8.byteLength);

// 2. 传入对象
var viewUnit8 = new Uint8Array([0, 1, 2, 3]);
logger(viewUnit8); // 4，创建了相同长度的二进制数组
logger(viewUnit8[1]); // 1，用给定值填充了 4 个字节（无符号 8 位整数）

// 3. 创建传入typedArray

let viewUint16 = new Uint16Array([1, 1000]);
console.log("viewUint16", viewUint16);
let arr8 = new Uint8Array(viewUint16.buffer);
console.log("arr8", arr8);
logger(arr8.BYTES_PER_ELEMENT); // 1
logger(arr8[1]); // 232，试图复制 1000，但无法将 1000 放进 8 位字节中（详述见下文）。

// 4. lenght

// let arr = new Uint16Array(4); // 为 4 个整数创建类型化数组
// logger(Uint16Array.BYTES_PER_ELEMENT); // 每个整数 2 个字节
// logger(arr.byteLength); // 8（字节中的大小）
// 0000000000000001
