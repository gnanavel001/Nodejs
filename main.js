const express = require("express");
const { write } = require("fs");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("hello1");
});

app.listen(PORT, () => {
  console.log("server running");
});
