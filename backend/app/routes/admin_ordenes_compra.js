
var express = require('express');
var router = express.Router();
var compras_libre = require('../models/compras_libre');
var carrito_compras = require('../models/carrito-compras');

//Obtener todas las compras
/* GET all products */
router.get('/list-compras', function(req, res, next) {
  compras_libre.find({ }, function (err, compras_libre){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!compras_libre)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(compras_libre)
    return res.json(compras_libre);
  });
});

//Obtener datos de carritos por compra realizada

/* GET product by intern code */
router.get('/compras-data/:code', function(req, res, next) {
  var code = req.params.code;
  carrito_compras.find({ 'id_compras': code }, function (err, carrito_compras){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!carrito_compras)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(compras_libre)
    return res.send(carrito_compras);
  });
});

//Actualizar status de la compra

router.post('/compra-status', function(req, res, next) {
  var data = req.body;
  var new_stock = 0;
  console.log(data)
  var id_compra = data[0].value;
  var estatus = data[1].value;
  //metodo para buscar el compras_libre
  compras_libre.find({'id': id_compra})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el status
      compras_libre.updateOne({'id': id_compra}, {'status': estatus })
      .then((compras_libre) => {
        console.log('update')
        console.log(compras_libre)
        var result = [{'success':true},{'id':data[0].value},{'status':data[1].value}]
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).send('Error en la peticion');
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});

module.exports = router;
