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

router.get('/primero', function(req, res, next) {
  console.log('primero')
  producto.find({clave_interna: '103173' }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        var cadena = producto[0].autos
        console.log(cadena)
        var vehiculo_completo = cadena.split('#');
        console.log('vehiculo_completo')	
        console.log(vehiculo_completo)			
        var contador_total_vehiculos = vehiculo_completo.length;
        console.log('contador_total_vehiculos')
        console.log(contador_total_vehiculos)
        if(contador_total_vehiculos > 1){
          for( var contador_while in vehiculo_completo)
          {
  
            var primer_paso_armadora = vehiculo_completo[contador_while].split('&');
            var armadora = primer_paso_armadora[0]; //Dodge
            console.log(armadora)
            var primer_paso_carro = primer_paso_armadora[1];
            var segundo_paso_carro = primer_paso_carro.split(" ");
            var carro = segundo_paso_carro[0];
            console.log(carro)
            var primer_paso_años = segundo_paso_carro[1];
            var nombre_o_año = primer_paso_años.substr(0, 2);
  
            if (nombre_o_año == '19' || nombre_o_año == '20')
            {
  
                if(segundo_paso_carro[2] == "")
                {
                  var adicional_litros_motor = 'universal';
                }
                else
                {
                  var adicional_litros_motor = segundo_paso_carro[2];
                }
  
                primer_paso_años = segundo_paso_carro[1];
                var segundo_paso_años = primer_paso_años.split(',');
                var total_de_años = segundo_paso_años.length;
                console.log('total_de_años 1')
                console.log(total_de_años)
                
                for(var contador_años in segundo_paso_años)
                {
                  //aqui se imprime la variable o se almacena .... La variable se llama año
                  var año = segundo_paso_años[contador_años];
                  total_de_años = total_de_años + 1;
                  console.log('total_de_años 1')
                  console.log(total_de_años)
                }
            }
            else
            {
                if(segundo_paso_carro[3] == "")
                {
                  var adicional_litros_motor = 'universal';
                  console.log(adicional_litros_motor)
                }
                else
                {
                  var adicional_litros_motor = segundo_paso_carro[3];
                  console.log(adicional_litros_motor)
                }
                primer_paso_años = segundo_paso_carro[2];
                var carro1 = segundo_paso_carro[0]+" "+segundo_paso_carro[1];
                console.log(carro1)
                var segundo_paso_años = primer_paso_años.split(',');
                var total_de_años = segundo_paso_años.length;
                console.log('total_de_años 2')
                console.log(total_de_años)
                for(var contador_años in segundo_paso_años)
                {
                  //aqui se imprime la variable o se almacena .... La variable se llama año
                  var año = segundo_paso_años[contador_años];
                  //console.log('while 2')
                  total_de_años = total_de_años + 1;
                }
            }
          }
        }
       
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
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

router.get('/nuevos', function(req, res, next) {
  producto.find({ }, function (err, producto){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
       
        return res.json({success:true,message:'Encontrados ',data:producto})
      }
  }).skip(150).limit(8);
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
  console.log(code)
  query = {
    'descripcion': { $regex: '.*' + code.toUpperCase() + '.*' },
    'nombre': { $regex: '.*' + code.toUpperCase() + '.*' }
  };
  
  //producto.find({ $text: { $search: code }}, function (err, producto){
  producto.find(query, function (err, producto){
    console.log(query)
    console.log('entro a general')
      if(err){
        console.log('entro a error')
        return res.status(500).send('Error en la peticion');
      }
      if(!producto){
        console.log('no hay')
        return res.status(404).send({message: 'Ningun registro identificado'});
      }else{
        console.log('producto')
        if(producto.length == 0){
          return res.json({success:false,message:'No Encontrados ',data:producto})
        }else{
          return res.json({success:true,message:'Encontrados ',data:producto})
        }
        
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
