const fs = require("fs");
const http = require("http");
let filePath;

const hostname = "127.0.0.1";
const port = 2000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  let filePath = "." + req.url;

  //   res.end("Hello World");
  switch (filePath) {
    case req.url === "/":
      http.get(".index.html");
      res.end();
      break;

    // case filePath == "./" + req.url:
    //   http.get((filePath = "./index.html"));
    //   res.end();
    //   break;
    // case filePath == "/" + about:
    //  http.get("./") filePath = "./about.html";
    //   res.end();
    //   break;
    // case filePath == "/sales":
    //   filePath = "./sales.html";
    //   res.end();
    //   break;
    // case filePath == "/products":
    //   filePath = "./products.html";
    //   res.end();
    //   break;
    // case filePath == "/product":
    //   filePath = "./product.html";
    //   res.end();
    //   break;
    default:
      break;
  }
});

fs.readFile(filePath, function (error, content) {
  if (error) {
    if (error.code == "ENOENT") {
      fs.readFile("./404.html", function (error, content) {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(content, "utf-8");
      });
    } else {
      response.writeHead(500);
      response.end(
        "Sorry, check with the site admin for error: " + error.code + " ..\n"
      );
    }
  } else {
    response.writeHead(200, { "Content-Type": contentType });
    response.end(content, "utf-8");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
