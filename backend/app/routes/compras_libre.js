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
var paypal = require('paypal-rest-sdk')
/*Make buy */
router.post('/buy', function(req, res, next) {
  var specific_data = req.body;
  console.log('DATOS DE COMPRA')
  console.log(specific_data)
  var query = {
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
  compras_libre.updateOne({'id': specific_data[0].value}, query)
  .then((compras_libre) => {
    console.log('update')
    console.log(query)
    console.log(compras_libre)
    if(!compras_libre)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  })
  .catch((err) => {
    return res.status(500).send('Error en la peticion');
  });
});


router.post('/add_buy', function(req, res, next) {
  var specific_data = req.body;
  console.log('DATOS DE COMPRA')
  console.log(specific_data)
  console.log(specific_data[0].id)
  var query = {
    'id': specific_data[0].id,
    'estado': specific_data[1].estado
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


//metodo para actualizar el stock
router.post('/agregar', function(req, res, next) {
  var data = req.body;
  console.log(data)
  console.log(data[0].id)
  var total = data[0].cantidad * data[0].precio
  console.log(total)
  var query = {
    'cantidades': data[0].cantidad,
    'total': total
  }

  carrito_compras.updateOne({'_id': data[0].id}, query)
  .then((producto) => {
    console.log('update')
    console.log(producto)
    return res.json(producto);
  })
  .catch((err) => {
    return res.status(500).send('Error en la peticion');
  });
});

//metodo para actualizar el stock
router.post('/finish', function(req, res, next) {
  var data = req.body;
  console.log(data)
  var query = {
    'total_productos': data[0].total_productos,
    'total_venta':data[0].total_venta,
    'estado':data[0].estado
  }
  console.log(query)
  compras_libre.updateOne({'id': data[0].id}, query)
  .then((producto) => {
    console.log('update')
    console.log(producto)
    return res.json(producto);
  })
  .catch((err) => {
    return res.status(500).send('Error en la peticion');
  });
});

router.post('/borrar_carr', function(req, res, next) {
  var code = req.body;
  console.log(code[0].id)
  //metodo para buscar el producto
  carrito_compras.remove({'_id': code[0].id})
  .then((producto) => {
    console.log('borrado')
    console.log(producto)
    var result = {'success':true}
    console.log(result)
    return res.json(result);
  })
  .catch((err) => {
    return res.status(500).send('Error en la peticion');
  });
});

router.post('/addcar', function(req, res, next) {
  var specific_data = req.body;
  console.log('DATOS DE CARRITO')
  console.log(specific_data)
  var query = {
    'id_compras': specific_data[0].code,
    'clave_productos': specific_data[1].claves,
    'nombre': specific_data[2].nombre,
    'cantidades': specific_data[3].canti,
    'precio':specific_data[4].precio,
    'total':specific_data[5].total
  }
  console.log('DATOS')
  console.log(query)
  carrito_compras.create(query,function (err, carrito_compras){
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!carrito_compras)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

/*Get last index car*/
router.get('/lastindex', function(req, res, next) {
  console.log('entro al ultimo id')
  compras_libre.find().sort({$natural: -1}).limit(1)
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun identificador '});
    }else{
      console.log(rawResponse)
      return res.json(rawResponse[0].id);
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});

/*Post list car*/
router.post('/listcar', function(req, res, next) {
  console.log('entro')
  var data = req.body;
  console.log(data)
  console.log(data[0].id_compras)
  carrito_compras.find({'id_compras': data[0].id_compras})
  .then((rawResponse) =>{
    console.log(rawResponse)
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun identificador '});
    }else{
      console.log(rawResponse)
      return res.json(rawResponse);
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });
});

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AeM868ignL0Xu7t3S7cxzH7EO2BTGiW9WHbIRbSdNyxoLhm9DDp7CAm_S7i381sSBAJClS2nfg5wHk96',
  'client_secret': 'EA3GgeFg6prhMZMLyCb-6_NQtQf7dFMd64r1jgVlpN22l3xF28_G6HE3XRfdDKfxRpfQKGtqGsNhK1Xx'
});

router.post('/pay', function(req, res){
  var dato = req.body
  console.log(dato[0].items)
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/aplicacion/success",
        "cancel_url": "http://localhost:3000/aplicacion/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Red Sox Hat",
                "sku": "001",
                "price": dato[0].total,
                "currency": "MX",
                "quantity": dato[0].cantidad
            }]
        },
        "amount": {
            "currency": "MX",
            "total": dato[0].total
        },
        "description": "Hat for the best team ever"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error)
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
    }
  });

  

  
});

router.get('/cancel', function(req, res) {
  res.send('Cancelled');
});


 

  
router.get('/success', function(req, res) {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  var dato = res.data
  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "MX",
            "total": dato[0].total
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
  });

});
module.exports = router;
