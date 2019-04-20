var express = require('express');
var router = express.Router();
var producto = require('../models/productos');

const csv = require('csv-parser');
const fs = require('fs');
const results = [];

/* GET all products */
router.get('/list', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(producto)
    return res.json(producto);
  });
});

/* GET product by intern code */
router.get('/list/:code', function(req, res, next) {
  var code = req.params.code;
  producto.findOne({ clave_interna: code }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(producto)
    return res.send(producto);
  });
});

/* Update product */
router.post('/update-product', function(req, res, next) {

  var specific_data = req.body;
  console.log('Datos de producto a actualizar')
  console.log(specific_data)

  var query = {
    'codigo': specific_data[0].value,
    'clave_interna': specific_data[1].value,
    'nombre': specific_data[2].value,
    'descripcion': specific_data[3].value,
    'tipo': specific_data[4].value,
    'marca': specific_data[5].value,
    'precio': specific_data[6].value,
    'imagenes':specific_data[7].value,
    'autos': specific_data[8].value,
    'stock': specific_data[9].value,
    'categoria': specific_data[10].value
  }

  //metodo para buscar el producto
  producto.find({'clave_interna': specific_data[1].value})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      producto.update({'clave_interna': code}, query)
      .then((producto) => {
        console.log('update')
        console.log(producto)
        var result = {'success':true}
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

//create new producto
router.post('/new-product', function(req, res, next) {
  var specific_data = req.body;
  console.log('Datos de nuevo producto')
  console.log(specific_data)

  var query = {
    'codigo': specific_data[0].value,
    'clave_interna': specific_data[1].value,
    'nombre': specific_data[2].value,
    'descripcion': specific_data[3].value,
    'tipo': specific_data[4].value,
    'marca': specific_data[5].value,
    'precio': specific_data[6].value,
    'imagenes':specific_data[7].value,
    'autos': specific_data[8].value,
    'stock': specific_data[9].value,
    'categoria': specific_data[10].value,
    'status' : "Activo"
  }

  compras_libre.create(query,function (err, nuevo_producto){
    console.log(query)
    console.log(nuevo_producto)
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!compras_libre)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

//delete product
router.post('/delete-product/:code', function(req, res, next) {
  var code = req.params.code;
  console.log(data)
  //metodo para buscar el producto
  producto.find({'clave_interna': code})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      producto.updateOne({'clave_interna': code}, {'status': "Inactivo" })
      .then((producto) => {
        console.log('update')
        console.log(producto)
        var result = {'success':true}
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
//productos mas vendidos

module.exports = router;
