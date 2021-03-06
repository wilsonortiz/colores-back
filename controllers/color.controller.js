const Color = require("../models/color.model");

/**
 * Obtiene lista de colores 
 * @param {*} req 
 * @param {*} res 
 */
const getColores = (req, res) => {

  let page = req.query.page || 1;
  let limit = req.query.limit || 6;

  let offset = 0 + (page - 1) * limit

  Color.findAndCountAll({
    limit,
    offset: offset
  }).then((result) => {

    //Calcular total de páginas
    let total_paginas = 1
      if(result.count / limit > 1){
        total_paginas = Math.ceil(result.count / limit);
      }
      // mapeamos la salida 
      const resultMap = result.rows.map(color =>{ 
        return {id :color.dataValues.id, name: color.dataValues.name, color: color.dataValues.color};
      });

      res.status(200).send({ total_elementos: result.count, pagina_actual : page, total_paginas: total_paginas, colores: resultMap });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: true, mensaje: "Error en el servidor" });
    });
};

/**
 * Obtiene un color
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * Crea un color
 * @param {*} req 
 * @param {*} res 
 */
const saveColor = (req, res) => {
  Color.create({
    name: req.body.name,
    color: req.body.color,
    pantone: req.body.pantone,
    year: req.body.year,
  }).then((color) => {
    res.status(201).send({ color: color });
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

/**
 * Actualiza un color
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * Elimina un color
 * @param {*} req 
 * @param {*} res 
 */
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
