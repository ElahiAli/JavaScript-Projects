const express = require("express");
const exp = express();

exp.get("/", (req, res) => {
  res.send("hello world");
});

exp.listen("3000");
