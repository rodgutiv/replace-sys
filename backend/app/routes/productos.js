/*
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var ProductoController = require('../controllers/productos');
// Llamamos al router
var router = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
router.get('/productos', ProductoController.getProductByCode);
// Exportamos la configuración
module.exports = router;
*/
var express = require('express');
var router = express.Router();
var producto = require('../models/productos');

/* GET all products */
router.get('/all', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.json(producto);
  });
});

/* GET product by code */
router.get('/search/:code', function(req, res, next) {
  var code = req.params.code;
  producto.findOne({ codigo: code }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto);
  });
});

/* GET brands for options */
router.get('/specific/brand', function(req, res, next) {
  producto.find().distinct(autos.marca_auto, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.json(producto.autos.marca_auto);
  });
});

/* GET model by brand */
router.get('/specific/model/:brand', function(req, res, next) {
  var brand = req.params.brand;
  producto.find({ autos.marca_auto: brand }).distinct(autos.modelo, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto.autos.modelo);
  });
});

/* GET year by model */
router.get('/specific/year/:model', function(req, res, next) {
  var model = req.params.model;
  producto.find({ autos.modelo: model }).distinct(autos.anio, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto.autos.anio);
  });
});

/* GET engine by year */
router.get('/specific/engine/:year', function(req, res, next) {
  var year = req.params.year;
  producto.find({ autos.anio: year }).distinct(autos.motor, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto.autos.motor);
  });
});

/* GET sparepart by engine */
router.get('/specific/sparepart/:engine', function(req, res, next) {
  var engine = req.params.engine;
  producto.find({ autos.motor: engine }).distinct(nombre, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto.nombre);
  });
});

/* GET full specific query */
router.get('/specific', function(req, res, next) {
  var specific_data = req.params.specific_data;
  producto.find({
    autos.marca_auto: specific_data.brand,
    autos.modelo: specific_data.model,
    autos.anio: specific_data.year,
    autos.motor: specific_data.engine,
    nombre: specific_data.name
  }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.json(producto);
  });
});

module.exports = router;
