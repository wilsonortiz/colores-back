
const express = require("express");
const logger = require('morgan');
const bodyParser = require("body-parser");

const app = express();

// use morgan to log requests to the console
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


module.exports = app;
