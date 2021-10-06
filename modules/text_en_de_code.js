// TextDecoder
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

console.log(new TextDecoder().decode(uint8Array)); // Hello

uint8Array = new Uint8Array([228, 189, 160, 229, 165, 189]);

console.log(new TextDecoder().decode(uint8Array)); // 你好

// TextEncoder
let encoder = new TextEncoder();

uint8Array = encoder.encode("Hello");
console.log(uint8Array.buffer); // 72,101,108,108,111
console.log(uint8Array); // 72,101,108,108,111

console.log("typeof Blob", Blob);
