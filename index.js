const http = require("node:http");
const fs = require("fs");
const host = "127.168.12.1";
// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log(request.url);

  fs.readFile("Pages/index.html", "utf-8", (error, data) => {
    if (error) throw error;
    res.write(data);
    res.end();
    document.querySelector("appendhtml");
    fs.appendFile("Pages/index.html", "<p> Text appended </p>", (error) => {
      if (error) throw error;
      res.end();
    });
  });
});

server.listen(8000, host, () => {});
