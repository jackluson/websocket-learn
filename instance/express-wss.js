const WebSocket = require('ws');
const express = require('express');
 
const app = express();
 
const server = new WebSocket.Server({ server: app.listen(8080) });


server.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", Object.prototype.toString.call(message));
    if (message instanceof Uint8Array) {
      console.log("Uint8Array");
    } else {
      console.log("text");
    }
    console.log("received: %s", message);
  });

  ws.send("something");
});
