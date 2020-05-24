
const express = require("express");
const logger = require('morgan');
const bodyParser = require("body-parser");

const app = express();

//cargar rutas
const color_route = require('../routes/color.route');

// use morgan to log requests to the console
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//rutas base
app.use('/api', color_route);

module.exports = app;
