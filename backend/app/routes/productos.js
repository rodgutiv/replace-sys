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

/*GET all products*/
router.get('/all', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.json(producto);
  });
});


/*GET product by code*/
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

module.exports = router;
