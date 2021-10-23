//!express_pre_3_1
// "The __dirname represent the full path of the folders starts from the pc until the 'public' folder.";

//!express_pre_3_2
// "The path.join method allows us to merge the folder names to one united url/path that gives us access to specific page on a website";

//!express_pre_3_3 - half
// const express = require("express");
// const path = require("path"),
//   app = express(),
//   PORT = 8080;
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

// app.listen(PORT, () => {
//   console.log(`server listens on port : ${PORT}`);
// });

//!Nathankrasney.com_express.static && nathankrasney.com-hbs-date
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const publicPath = path.join(__dirname, "public");
const handlebars = require("express-handlebars");
let currentYear = new Date().getFullYear();
const navBar = `<nav>
    <a href="/">Home page</a>
    <a href="/about.hbs">About page</a>
    <a href="/courses.hbs">Courses page</a>
    <a href="/event.hbs">Events page</a>
    <a href="/mentoring.hbs">Mentoring page</a>
    <a href="/contact.hbs">Contact page</a>
    <a href="/Testimonials.hbs">Testimonials</a>
  </nav>`;

app.use(express.static(publicPath));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({ layoutsDir: `${__dirname}/views/layouts`, extname: "hbs" })
);

app.get("/", (req, res) => {
  res.render("main", { layout: "index", currentYear, navBar });
});

app.get("/event.hbs", (req, res) => {
  res.render("main", { layout: "event", currentYear, navBar });
});

app.get("/about.hbs", (req, res) => {
  res.render("main", { layout: "about", currentYear, navBar });
});

app.get("/mentoring.hbs", (req, res) => {
  res.render("main", { layout: "mentoring", currentYear, navBar });
});

app.get("/courses.hbs", (req, res) => {
  res.render("main", { layout: "courses", currentYear, navBar });
});

app.get("/contact.hbs", (req, res) => {
  res.render("main", { layout: "contact", currentYear, navBar });
});

app.get("/testimonials.hbs", (req, res) => {
  res.render("main", { layout: "testimonials", currentYear, navBar });
});

app.listen(port);
console.log(`app os listening on port: ${port}`);

//!nathankrasney.com-hbs-array
//!nathankrasney.com-hbs-add-form
//!nathankrasney.com-hbs-delete-form
