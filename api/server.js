const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const models = require("./models");

models.sequelize
  .sync()
  .then(() => {
    console.log("models synced");
  })
  .catch((err) => {
    console.log(err, "sync error");
  });

require("./routes")(app);

const PORT = parseInt(process.env.PORT, 10) || 3001;
app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT);

module.exports = app;
