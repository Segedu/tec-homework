const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const handlebars = require("express-handlebars");
const { send } = require("process");
let cities, lon, lat;

app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({ layoutsDir: `${__dirname}/views/layouts`, extname: "hbs" })
);

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/findLocation.hbs", (req, res) => {
  res.render("main", { layout: "findLocation" });
});

app.get("/city", (req, res) => {
  const APIkey = "641974375fb31ab9962b7f26bce1a2a0";
  const cityName = `${req.query.city}`;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
  const axios = require("axios");

  return axios
    .get(url)
    .then(function (response) {
      if (response.status === 200) {
        cities = JSON.stringify(req.query.city);
        lon = JSON.stringify(response.data.coord.lon);
        lat = JSON.stringify(response.data.coord.lat);
        res.render("main", { layout: "findLocation", lon, lat });
      }
    })
    .catch(function (error) {
      res.sendFile(path.join(__dirname, "public", "error.html"));
      console.log("i am in catch");
      console.log("error");
    });
});

app.get("*", (req, res) => {
  res.send("sorry your page can't be reached!!");
});

app.listen(port);
console.log(`app is running on port ${port}`);
