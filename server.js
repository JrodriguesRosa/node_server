"use strict";

const http = require("node:http");
const fs = require("fs");
const port = 4040;

// *pages_here

const about = fs.readFileSync(__dirname + "/pages/about.html");
const home = fs.readFileSync(__dirname + "/pages/home.html");
const pageNotFound = fs.readFileSync(__dirname + "/pages/notFound.html");

// !server

const server = http.createServer((req, res) => {
  const addres = req.url;

  switch (addres) {
    case "/home":
      res.writeHead(200, {
        DocumentType: "text/html",
      });
      res.end(home);
      break;
    case "/about":
      res.writeHead(200, {
        DocumentType: "text/html",
      });
      res.end(about);
      break;
    default:
      res.writeHead(404, {
        DocumentType: "text/html",
      });
      res.end(pageNotFound);
  }
});

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
