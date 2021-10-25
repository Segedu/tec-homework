const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const handlebars = require("express-handlebars");
let city, name, lon, lat, temp, feelsLike;

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
  const cityName = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
  const axios = require("axios");

  return axios
    .get(url)
    .then(function (response) {
      console.log(response.data);
      if (response.status === 200) {
        city = req.query.city;
        name = response.data.name;
        lon = response.data.coord.lon;
        lat = response.data.coord.lat;
        temp = Math.ceil(response.data.main.temp / 10);
        feelsLike = Math.ceil(response.data.main.feels_like / 10);

        res.render("main", {
          layout: "findLocation",
          lon,
          lat,
          temp,
          feelsLike,
          name,
        });
      }
    })
    .catch(function (error) {
      res.sendFile(path.join(__dirname, "public", "error.html"));
      console.log("error. you are in catch");
    });
});

app.get("*", (req, res) => {
  res.send("sorry your page can't be reached!!");
});

app.listen(PORT);
console.log(`app is listening on port: ${PORT}`);
