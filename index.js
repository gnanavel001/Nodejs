const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Welcome back gnanavel",
    })
  );
});

server.listen(8000);
