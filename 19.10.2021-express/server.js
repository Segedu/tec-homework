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

//!Nathankrasney.com_express.static
// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;
// const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
// app.get("/", (req, res) => {
//   res.sendFile("/index.html");
// });

// app.listen(port);

//!nathankrasney.com-hbs-date
//!nathankrasney.com-hbs-array
//!nathankrasney.com-hbs-add-form
//!nathankrasney.com-hbs-delete-form
