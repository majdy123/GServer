const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mydb = require("./config/db");
const route = require("./routes/router");

// for json encoding :
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handling routes :
app.use(route);

module.exports = app;
