'use strict'
// Cargamos los modelos para usarlos posteriormente
var Producto = require('../models/productos');

// Obtener el producto por codigo
function getProductByCode(req, res){
    var code = req.query.code;
    Producto.findOne({ codigo: code }, function (err, producto){
      //Si surge un error lo menciona
        if(err)
          return res.status(500).send({message: 'Error en la peticion'});
      //Envia el resultado de producto encontrado o no
        if(!producto)
          return res.status(404).send({message: 'El producto no existe'});
        else
          return res.send(producto);
    });
}
