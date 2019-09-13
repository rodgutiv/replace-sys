
var express = require('express');
var router = express.Router();
var promocion = require('../models/promociones');
var producto = require('../models/productos');


/* GET all promociones */
router.get('/all', function(req, res, next) {
  promocion.find({ }, function (err, promocion){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!promocion){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        console.log('producto')
        console.log(producto)
        return res.json({success:true,message:'Encontradas ',data:promocion})
      }
      
  });
});

/* GET promocion by code */
router.get('/search/:code', function(req, res, next) {
  var code = req.params.code;
  promocion.findOne({ codigo: code }, function (err, promocion){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!promocion)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(promocion)
    return res.send(promocion);
  });
});

//create new promocion
router.post('/new-promocion', function(req, res, next) {
  var specific_data = req.body;

  console.log('Datos de nueva promocion');
  console.log(req.body);
  console.log('Imagen asociada:');
  console.log(req.files.img1.name);

  var query = {
    'ruta': "/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/imagenes_promociones/" + specific_data.id_promo + ".jpg",
    'id_promo': specific_data.id_promo,
    'nombre': specific_data.nombre,
    'descripcion': specific_data.descripcion,
    'descuento': specific_data.descuento,
    'status': "Activo"
  }

  console.log(query);

  let img = req.files.img1;
  var route1 = "/Users/macbookair/Documents/refacesys/replace-sys/admin-backend/app/imagenes_promociones/" + specific_data.id_promo + ".jpg"
  promocion.create(query)
  .then((promocion) =>
  {
    console.log("creo noticia");
    img.mv(route1, function(err)
    {
      if (err)
      {
        console.log("no movio nada");
        return res.status(500).send(err);
      }
      res.send('File uploaded!');
    })
  });

});

//delete promocion
router.post('/delete-promocion/:code', function(req, res, next) {
  var code = req.params.code;
  console.log(code)
  //metodo para buscar la promocion
  productos.find({'id_promo': code})
  .then((rawResponse) =>{
    if(!rawResponse){

            promocion.find({'id_promo': code})
            .then((rawResponse) =>{
              if(!rawResponse){
                return res.status(404).send({message: 'Ningun registro identificado'});
              }else{
                console.log('correcto')
                //metodo que cambia el stock
                promocion.updateOne({'id_promo': code}, {'status': "Inactivo" })
                .then((promocion) => {
                  console.log('update')
                  console.log(promocion)

                  console.log('correcto')
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

    }else{
      console.log('No puede eliminar')
      var result = {'success':false}
      console.log(result)
      return res.json(result);
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});




module.exports = router;
