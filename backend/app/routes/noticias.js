
var express = require('express');
var router = express.Router();
var noticia = require('../models/noticias');

/* GET all noticias */
router.get('/all', function(req, res, next) {
  noticia.find({ }, function (err, noticia){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!noticia)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(noticia)
    return res.json(noticia);
  });
});

/* GET noticia by code */
router.get('/search/:code', function(req, res, next) {
  var code = req.params.code;
  noticia.findOne({ titulo: code }, function (err, noticia){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!noticia)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(noticia)
    return res.send(noticia);
  });
});


/* Update noticia */
router.post('/update-noticia', function(req, res, next) {

  var specific_data = req.body;
  console.log('Datos de noticia a actualizar')
  console.log(specific_data)

  var query = {
    'clave_interna': specific_data[1].value,
    'nombre': specific_data[2].value,
    'descripcion': specific_data[3].value,
    'tipo': specific_data[5].value,
    'marca': specific_data[6].value,
    'precio': specific_data[7].value,
//    'imagenes':specific_data[7].value,
    'autos': specific_data[10].value,
    'stock': specific_data[8].value,
    'categoria': specific_data[4].value,
    'status': specific_data[9].value
  }
  console.log('datos en query')
  console.log(query)
  //metodo para buscar el producto
  producto.find({'clave_interna': specific_data[1].value})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      producto.updateOne({'clave_interna': specific_data[1].value}, query)
      .then((producto) => {
        console.log('update')
        console.log(producto)
        var result = {'success':true}
        console.log(result)
        return res.json(result);
      })
      .catch((err) => {
        console.log('error en la consulta')
        console.log(err)
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
    'tipo': specific_data[5].value,
    'marca': specific_data[6].value,
    'precio': specific_data[8].value,
//    'imagenes': [ specific_data[10].value, specific_data[11].value, specific_data[12].value ],
    'autos': specific_data[7].value,
    'stock': specific_data[9].value,
    'categoria': specific_data[4].value,
    'status': "Activo"
  }

  let img1 = req.files.img1;
  var route1 = "../admin/imagenes/" + specific_data[1].value + "-001.jpg"
  let img2 = req.files.img2;
  var route2 = "../admin/imagenes/" + specific_data[1].value + "-002.jpg"
  let img3 = req.files.img3;
  var route3 = "../admin/imagenes/" + specific_data[1].value + "-003.jpg"
/*
  producto.create(query,function (err, producto){
    console.log(query)
    console.log(producto)
    if(err)
    {
      console.log("Error en la peticion")
      return res.status(500).send('Error en la peticion');
    }
    if(!producto)
    {
      console.log("ningun producto")
      return res.status(404).send({message: 'Ningun registro identificado'});
    }
    else
    {
      console.log("exito!")
      return res.status(404).send({message: 'Saved!'});
    }
  });
  */

  producto.create(query)
  .then((producto) =>
  {
        console.log('correcto')
        img1.mv(route1)
        .then((producto) =>
        {
          console.log('imagen 2 correcto')
          img2.mv(route2)
          .then((producto) =>
            {
              console.log('imagen 3 correcto')
              img3.mv(route3, function(err)
              {
                if (err)
                  return res.status(500).send(err);
                res.send('File uploaded!');
              })
              .catch((err) =>
              {
                return res.status(500).send('Error en la peticion');
              });
            });
        });
  });
});

//delete product
router.post('/delete-product/:code', function(req, res, next) {
  var code = req.params.code;
  console.log(code)
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
