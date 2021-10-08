let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function (e) {
  console.info("[open] Connection established");

  console.info("Sending to server");
  const payload = { name: "你好" }
  // 利用String.fromCodePoint(0x1F639)
  let oneByte = 'a' // ascall 码
  let twoByte = '۵'
  let threeByte = '你' // 大部分中文
  let fourByte = '😹'
  
  let sendMsg = twoByte || JSON.stringify(payload)
  // let encoder = new TextEncoder();

  // let uint8ArraySend = encoder.encode(sendMsg);
  socket.send(sendMsg);
};

socket.onmessage = function (event) {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // 例如服务器进程被杀死或网络中断
    // 在这种情况下，event.code 通常为 1006
    console.log("[close] Connection died");
  }
};

socket.onerror = function (error) {
  console.error(`[error] ${error.message}`);
};
