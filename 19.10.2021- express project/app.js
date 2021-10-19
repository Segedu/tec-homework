const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/city", (req, res) => {
  const cityName = `${req.query.city}`;
  const APIkey = "641974375fb31ab9962b7f26bce1a2a0";
  const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;

  axios
    .get(url)
    .then(function (res) {
      console.log("success");
      console.log(res);
      if (res.status === 200) {
        console.log(res.data);
      }
    })
    .catch(function (error) {
      console.log("error");
      console.log(error);
    });
  res.send(`${req.query.city}`);
  // res.send(`longitude: ${req.query.longitude}, latitude:${req.query.latitude}`);
  // res.sendFile(publicPath, "findLocation.html");
});

app.listen(port);
console.log(`app is running on port ${port}`);
