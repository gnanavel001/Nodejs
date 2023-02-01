const http = require("node:http");
const fs = require("fs");
// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log(request.url);
  fs.appendFile("Pages/index.html", "<p> Text appended </p>", (error) => {
    if (error) throw error;
    res.end();
  });
  fs.readFile("Pages/index.html", "utf-8", (error, data) => {
    if (error) throw error;
    res.write(data);
    res.end();
  });
});

server.listen(8000);
