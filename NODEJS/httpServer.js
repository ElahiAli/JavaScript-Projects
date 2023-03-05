const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world from node js.");
    res.end(); //important message will not show up without it.
  } else {
    res.write("server error it's not the route url.");
    res.end();
  }
});
server.listen("3000");

//------------------------------------------------
//const http = require('http')
const fs = require("fs");
const servers = http.createServer((req, res) => {
  readStream = fs.createReadStream("./nodejs_note.txt");
  res.writeHead(200, { "Content-Type": "text" });
  readStream.pipe(res);
});

servers.listen("5000");
