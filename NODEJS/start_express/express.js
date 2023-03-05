const express = require("express");
const exp = express();

exp.get("/", (req, res) => {
  res.send("hello world");
});

exp.get("/example/:name/:age", (req, res) => {
  res.send(req.params.name + " : " + req.params.age);
  console.log(req.params);
  console.log(req.query); // :3000/example/:name/:age?tutorial=paramsTutorial&sort=byage
});

exp.listen("3000");
