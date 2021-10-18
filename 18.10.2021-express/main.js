//!express_1
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;

// app.get("/", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "myName.html"));
// });
// app.listen(port);

//!web_server_1.5
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.get("/", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "about.html"));
// });
// app.listen(port);

//!web_server_1.6

//!web_server_1.7
// const { response } = require("express");
// const express = require("express");
// const { request } = require("http");
// const app = express();
// const path = require("path");
// const port = 8080;
// app.get("/", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/event", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "event.html"));
// });
// app.get("/testimonials", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "testimonials.html"));
// });
// app.get("/mentoring", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "mentoring.html"));
// });
// app.get("/courses", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "courses.html"));
// });
// app.get("/contact", (request, response) => {
//   response.sendFile(path.join(__dirname, "public", "contact.html"));
// });
// app.listen(port);
