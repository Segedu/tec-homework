const express = require("express"),
  hbs = require("hbs"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  viewsPath = path.join(__dirname, "..", "templates", "views"),
  partialsPath = path.join(__dirname, "..", "templates", "partials"),
  app = express(),
  PORT = 8080;

let city, name, lon, lat, temp, feelsLike;

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/findLocation", (req, res) => {
  res.render("findLocation");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/city", (req, res) => {
  const API_KEY = process.env.open_weather_api_key;
  const cityName = req.query.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
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

        res.render("findLocation", {
          lon,
          lat,
          temp,
          feelsLike,
          name,
        });
      }
    })
    .catch(function (error) {
      res.render("error.hbs");
      console.log("error. you are in catch");
    });
});

app.get("*", (req, res) => {
  res.send("sorry your page can't be reached!!");
});

app.listen(PORT);
console.log(`app is listening on port: ${PORT}`);
