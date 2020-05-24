const express = require('express');
const colorCtrl = require("../controllers/color.controller");
const api = express.Router();

api.get("/colores", colorCtrl.getColores);
api.post("/color", colorCtrl.saveColor);
api.get("/color/:id", colorCtrl.getColor);
api.put("/color/:id", colorCtrl.updateColor);
api.delete("/color/:id", colorCtrl.deleteColor);

module.exports = api;