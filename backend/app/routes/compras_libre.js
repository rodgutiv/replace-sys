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
var compras_libre = require('../models/compras_libre');
var carrito_compras = require('../models/carrito-compras');

/*Make buy */
router.post('/buy', function(req, res, next) {
  var specific_data = req.body;
  console.log('DATOS DE COMPRA')
  console.log(specific_data)
  var query = {
    'id': specific_data[0].value,
    'datos_personales':
    {
      'nombre_completo': specific_data[1].value,
      'email': specific_data[2].value,
      'telefono': specific_data[3].value
    },
    'datos_entrega':
    {
      'codigo_postal': specific_data[4].value,
      'estado': specific_data[5].value,
      'municipio': specific_data[6].value,
      'calle': specific_data[7].value,
      'num_interior': specific_data[8].value,
      'num_exterior': specific_data[9].value,
      'colonia': specific_data[10].value,
      'referencias': specific_data[11].value
    }
  }
  compras_libre.create(query,function (err, compras_libre){
    console.log(query)
    console.log(compras_libre)
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!compras_libre)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

router.post('/addcar', function(req, res, next) {
  var specific_data = req.body;
  console.log('DATOS DE CARRITO')
  console.log(specific_data)
  var query = {
    'id': specific_data[0].code,
    'clave_productos': specific_data[1].claves,
    'cantidades': specific_data[2].canti
  }
  carrito_compras.create(query,function (err, carrito_compras){
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!carrito_compras)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

module.exports = router;
