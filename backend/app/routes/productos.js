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
    //console.log(producto)
    return res.json(producto);
  });
});

router.get('/primeros', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
       
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  }).limit(8);
});

router.get('/vendidos', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
       
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  }).limit(8).skip(200);
});

router.get('/general_search/:word', function(req, res, next) {
  var code = req.params.word;

  query = {
    'descripcion': { $regex: '.*' + code + '.*' }
  };
  //producto.find({ $text: { $search: code }}, function (err, producto){
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        //console.log(producto)
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  });
});

router.get('/promocion', function(req, res, next) {
  query = {
     'id_promo': { $ne: 'Ninguna' }
  };
  console.log(query)
  //producto.find({ $text: { $search: code }}, function (err, producto){
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        console.log(producto)
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  });
});

router.get('/general_search2/:word', function(req, res, next) {
  var code = req.params.word;
 
  query = {
    'categoria': code
  };
  //producto.find({ $text: { $search: code }}, function (err, producto){
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  }).limit(4);
});

router.get('/general_search3/:word', function(req, res, next) {
  var code = req.params.word;
  
  query = {
    'categoria': code
  };
  //producto.find({ $text: { $search: code }}, function (err, producto){
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
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
  producto.find().distinct('marca', function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.json(producto);
  });
});


/* GET model by brand */
router.get('/specific/categoria', function(req, res, next) {
  producto.find().distinct('categoria', function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto);
  });
});

/* GET model by brand */
router.get('/specific/pesado', function(req, res, next) {
  producto.find({pesado:'Si'}, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    console.log(producto)
    return res.json(producto)
    //return res.json(producto);
  });
});

/* GET model by brand */
router.get('/specific/outlet', function(req, res, next) {
  producto.find({outlet:'Si'}, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(producto)
    return res.json(producto)
    //return res.json(producto);
  });
});


/* GET model by brand */
router.get('/specific/tipo/:categoria', function(req, res, next) {
  var categoria = req.params.categoria;
  producto.find({ 'categoria': categoria }).distinct('tipo', function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto);
  });
});

router.get('/specific/marca/:tipo', function(req, res, next) {
  var tipo = req.params.tipo;
  producto.find({ 'tipo': tipo }).distinct('marca', function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    return res.send(producto);
  });
});


/* GET full specific query */
router.post('/specific', function(req, res, next) {
  var specific_data = req.body;
  
  //var data_size = specific_data.length;
  var cont = 0
  if(specific_data.categoria != null ){
    if(specific_data.tipo != null ){
      if(specific_data.marca != null ){
        cont = 3
        console.log(cont)
      }else{
        cont = 2
        console.log(cont)
      }
    }else{
      cont = 1
      console.log(cont)
    }
  }else{
    console.log('no')
  }
//  console.log(specific_data.categoria)
  var query;
  switch(cont)
  {
    case 1:
      query = {
        'categoria': specific_data.categoria
      };
    break;
    case 2:
      query = {
        'categoria': specific_data.categoria,
        'tipo': specific_data.tipo
      };
    break;
    case 3:
      query = {
        'categoria': specific_data.categoria,
        'tipo': specific_data.tipo,
        'marca': specific_data.marca
      };
    break;
  }
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(producto)
    return res.json({success:true,message:'Encontrados ',data:producto})
    //return res.json(producto);
  });
});

/* GET full specific query */
router.post('/specific2', function(req, res, next) {
  var specific_data = req.body;
  console.log(specific_data[0].marca)
  query = {
    'marca': specific_data[0].marca
  };
  producto.find(query, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(producto)
    return res.json(producto);
  });
});

//metodo para actualizar el stock
router.post('/stockup', function(req, res, next) {
  var data = req.body;
  var new_stock = 0;
  console.log(data)

  //metodo para buscar el producto
  producto.find({'codigo': data[0].value})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      var stock = rawResponse[0].stock
      console.log(stock)
      var quit_stock = data[1].value
      console.log(quit_stock)
      new_stock = stock - quit_stock
      console.log(new_stock)

      //metodo que cambia el stock
      producto.updateOne({'codigo': data[0].value}, {'stock': new_stock })
      .then((producto) => {
        console.log('update')
        console.log(producto)

        var result = [{'success':true},{'id':data[0].value},{'stock':data[1].value}]
        //console.log(result)
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

//metodo para actualizar el stock
router.post('/addstock', function(req, res, next) {
  var data = req.body;
  var new_stock = 0;
  console.log(data)
  var data = req.body;
  var new_stock = 0;
  console.log(data[0].clave)
  console.log(data[1].stock)
  //metodo para buscar el producto
  producto.find({'codigo': data[0].clave})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      var stock = rawResponse[0].stock
      console.log(stock)
      var add_stock = data[1].stock
      new_stock = stock + add_stock
      console.log(new_stock)

      //metodo que cambia el stock
      producto.updateOne({'codigo': data[0].clave}, {'stock': new_stock })
      .then((producto) => {
        console.log('update')
        console.log(producto)

        var result = [{'success':true},{'id':data[0].code},{'stock':data[1].stock}]
        //console.log(result)
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


/*Get categories*/
router.get('/category', function(req, res, next) {
  producto.find().distinct('categoria', function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto)
        return res.status(404).send({message: 'Ninguna categoria identificada'});
    return res.json(producto);
  });
});



module.exports = router;
