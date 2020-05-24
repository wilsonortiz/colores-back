const Color = require("../models/color.model");

const getColores = (req, res) => {

  let page = req.query.page;
  let limit = req.query.limit;

  let offset = 0 + (page - 1) * limit

  Color.findAndCountAll({
    limit,
    offset: offset
  }).then((result) => {
    let total_paginas = 1
      if(result.count / limit > 1){
        total_paginas = Math.ceil(result.count / limit);
      }

      res.status(200).send({ total_elementos: result.count, pagina_actual : page, total_paginas: total_paginas,colores: result.rows });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: true, mensaje: "Error en el servidor" });
    });
};

const getColor = (req, res) => {
  Color.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((color) => {
      if (color !== null) {
        res.status(200).send({ error: false, color: color });
      } else {
        res.status(404)
          .send({
            error: true,
            mensaje: `No existe el color: ${req.params.id}`,
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .send({
          error: true,
          mensaje: `Error en el servidor`,
        });
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
  })
  .catch(error=>{
    console.error(error);
    res.status(500)
    .send({
      error: true,
      mensaje: `Error en el servidor`,
    });
  });
};

const updateColor = (req, res) => {
  Color.findOne({
    where: {
      id: req.params.id,
    },
  }).then(color => {
    if(color !== null){
      color.update({
          name: req.body.name,
          color: req.body.color,
          pantone: req.body.pantone,
          year: req.body.year,
        })
        .then((color) => {
          console.log("color actualizado");
          res.status(200).send({ color: color });
        });
    }else {
      res.status(404)
        .send({
          error: true,
          mensaje: `No existe el color: ${req.params.id}`,
        });
    }
  });
};

const deleteColor = (req, res) => {
  Color.destroy({
    where: {
      id: req.params.id,
    },
  }).then((color) => {
    console.log(color);
    if (color === 1) {
      res.status(200).send({ eliminado: true });
    } else {
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
