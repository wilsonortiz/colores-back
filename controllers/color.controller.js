const Color = require("../models/color.model");

const getColores = (req, res) => {
  Color.findAll().then((colores) => {
    console.log(colores);
    res.status(200).send({ colores: colores });
  });
};

const getColor = (req, res) => {
  Color.findOne({
    where: {
      id: req.params.id,
    },
  }).then((color) => {
    console.log(color);
    res.status(200).send({ color: color });
  });
};

const saveColor = (req, res) => {
  Color.create({
    name: req.body.name,
    color: req.body.color,
    pantone: req.body.pantone,
    year: req.body.year,
  }).then((color) => {
    console.log(color);
    res.status(200).send({ color: color });
  });
};

const updateColor = (req, res) => {
  Color.findOne({
    where: {
      id: req.params.id,
    },
  }).then((color) => {
    color
      .update({
        name: req.body.name,
        color: req.body.color,
        pantone: req.body.pantone,
        year: req.body.year,
      })
      .then((color) => {
        console.log("color actualizado");
        res.status(200).send({ color: color });
      });
  });
};

const deleteColor = (req, res) => {
  Color.destroy({
    where: {
      id: req.params.id,
    },
  }).then((color) => {
    console.log(color);
    if(color === 1){
      res.status(200).send({ eliminado: true }); 
    }else{
      res.status(500).send({ eliminado: false }); 
    }
  });
};

module.exports = {
  getColores,
  getColor,
  saveColor,
  updateColor,
  deleteColor,
};
