const ws = require("ws");

const WebSocketServer = ws.WebSocketServer;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
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
