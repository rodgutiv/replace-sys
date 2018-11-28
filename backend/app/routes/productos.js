'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var ProductoController = require('../controllers/productos');
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/productos/:code', ProductoController.getProductByCode);
// Exportamos la configuración
module.exports = api;
