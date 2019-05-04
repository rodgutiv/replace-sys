var express = require('express');
var router = express.Router();
var pago = require('../models/datos_pago');

/* GET pago by id */
router.get('/pagos/:id', function(req, res, next) {
  var id_user_pago = req.params.id;
  pago.findOne({ id_user: id_user_pago }, function (err, pago){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!pago)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(pago)
    return res.send(pago);
  });
});

/* Update opcion de pago */
router.post('/update-pagos', function(req, res, next) {

  var specific_data = req.body;
  console.log('Datos de pago de pago a actualizar')
  console.log(specific_data)
  var id_user_pago = specific_data[0].value
  var query = {
    'id_user': id_user_pago,
    'numero_tarjeta': specific_data[1].value,
    'cvv':            specific_data[2].value,
    'fecha_venc':     specific_data[3].value,
    'tipo_tarjeta':   specific_data[4].value,
    'status':         specific_data[5].value
  }

  //metodo para buscar el pago
  pago.find({'id_user': id_user_pago})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      pago.update({'id_user': id_user_pago}, query)
      .then((pago) => {
        console.log('update')
        console.log(pago)
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

//dar de alta nueva opcion de pago
router.post('/new-prepayment', function(req, res, next) {
  var specific_data = req.body;
  console.log('Datos de nueva opcion de pago')
  console.log(specific_data)

  var query = {
    'id_user':        specific_data[0].value,
    'numero_tarjeta': specific_data[1].value,
    'cvv':            specific_data[2].value,
    'fecha_venc':     specific_data[3].value,
    'tipo_tarjeta':   specific_data[4].value,
    'status':         "Activo"
  }

  pago.create(query,function (err, pago){
    console.log(query)
    console.log(pago)
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!pago)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

//Eliminar opcion de pago
router.post('/delete-prepayment/:id', function(req, res, next) {
  var id_user = req.params.id;
  console.log(id_user)
  //metodo para buscar el pago
  pago.find({'id_user': id_user})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      pago.updateOne({'id_user': id_user}, {'status': "Inactivo" })
      .then((pago) => {
        console.log('update')
        console.log(pago)
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

module.exports = router;
