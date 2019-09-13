
var express = require('express');
var router = express.Router();
var compras_libre = require('../models/compras_libre');
var carrito_compras = require('../models/carrito-compras');
var facturas = require('../models/facturas');

//Obtener compras por comprador

router.get('/mejores-compradores', function(req, res, next) {
  compras_libre.aggregate(
          {
            $group : {
              _id :  "$datos_personales.email" ,
              total_compra: { $sum : "$total_venta" },
  //            nombre: { $push: "$datos_personales.nombre_completo" } ,
              nombre: "$datos_personales.nombre_completo" ,
              count : { $sum : 1 }
            }
           },
           function (err, compras_libre){
             if(err)
               return res.status(500).send('Error en la peticion');
             if(!compras_libre)
               return res.status(404).send({message: 'Ningun registro identificado'});
           //console.log(compras_libre)
           return res.json(compras_libre);
         }).limit(10);
});

//Obtener productos más vendidos

router.get('/productos-mas-vendidos', function(req, res, next) {
  carrito_compras.aggregate(
          {
            $group : {
              _id :  "$clave_productos" ,
//              nombre: { $push : "$nombre" },
              nombre: "$nombre",
              cantidades: { $sum : "$cantidades" },
              count : { $sum : 1 }
            }
           },
           function (err, carrito_compras){
             if(err)
               comsole.log(err)
               return res.status(500).send('Error en la peticion');
             if(!carrito_compras)
               return res.status(404).send({message: 'Ningun registro identificado'});
           console.log(compras_libre)
           return res.json(carrito_compras);
         }).limit(8);
});


module.exports = router;
