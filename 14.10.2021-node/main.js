const fs = require("fs");
const http = require("http");
const hostname = "127.0.0.1";
const port = 2000;

const server = http.createServer((req, res) => {
  try {
    switch (req.url) {
      case "/":
        console.log("this is the index page request");
        fs.readFile("./index.html", "utf-8", (error, data) => {
          if (error) {
            throw "index.html file error";
          }
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/about":
        console.log("this is the about page request");
        fs.readFile("./about.html", "utf-8", (error, data) => {
          if (error) {
            throw "about.html file error";
          }
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/product":
        fs.readFile("./product.html", "utf-8", (error, data) => {
          if (error) {
            throw "product.html file error";
          }
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/style.css":
        fs.readFile("./style.css", "utf-8", (error, data) => {
          if (error) {
            throw "css file error";
          }
          res.writeHead(200, { "content-type": "text/css" });
          res.write(data);
          res.end();
        });
        break;

      default:
        break;
    }
  } catch (error) {
    res.writeHead(404);
    res.write("error 404");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
