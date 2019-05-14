var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');

/* GET all users */
router.get('/all-users', function(req, res, next) {
  usuario.find({ }, function (err, usuario){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!usuario)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(usuario)
    return res.json(usuario);
  });
});

/* GET user by id */
router.get('/all-users/:id', function(req, res, next) {
  var id_user = req.params.id;
  usuario.findOne({ id: id_user }, function (err, usuario){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!usuario)
        return res.status(404).send({message: 'Ningun registro identificado'});
    //console.log(usuario)
    return res.send(usuario);
  });
});

/* Update user */
router.post('/update-user', function(req, res, next) {

  var specific_data = req.body;
  console.log('Datos de usuario a actualizar')
  console.log(specific_data)
  var id_user = specific_data[0].value
  var query = {
    'id': id_user,
    'datos_personles':
    {
      'nombre_completo':  specific_data[1].value,
      'username':         specific_data[2].value,
      'email':            specific_data[3].value,
      'password':         specific_data[4].value,
      'fecha_nacimiento': specific_data[5].value,
      'telefono':         specific_data[6].value
    },
    'domicilio':
    {
      'num_interior':     specific_data[7].value,
      'num_exterior':     specific_data[8].value,
      'calle':            specific_data[9].value,
      'colonia':          specific_data[10].value,
      'localidad':        specific_data[11].value,
      'municipio':        specific_data[12].value,
      'estado':           specific_data[13].value,
      'pais':             specific_data[14].value,
      'codigo_pais':      specific_data[15].value,
      'referencias':      specific_data[16].value
    }
  }

  //metodo para buscar el usuario
  usuario.find({'id': id_user})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      usuario.update({'id': id_user}, query)
      .then((usuario) => {
        console.log('update')
        console.log(usuario)
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

//create new usuario
router.post('/new-user', function(req, res, next) {
  var specific_data = req.body;
  console.log('Datos de nuevo usuario')
  console.log(specific_data)

  var query = {
    'id': id_user,
    'datos_personles':
    {
      'nombre_completo':  specific_data[1].value,
      'username':         specific_data[2].value,
      'email':            specific_data[3].value,
      'password':         specific_data[4].value,
      'fecha_nacimiento': specific_data[5].value,
      'telefono':         specific_data[6].value
    },
    'domicilio':
    {
      'num_interior':     specific_data[7].value,
      'num_exterior':     specific_data[8].value,
      'calle':            specific_data[9].value,
      'colonia':          specific_data[10].value,
      'localidad':        specific_data[11].value,
      'municipio':        specific_data[12].value,
      'estado':           specific_data[13].value,
      'pais':             specific_data[14].value,
      'codigo_pais':      specific_data[15].value,
      'referencias':      specific_data[16].value
    },
    'status':             "Activo"
  }

  compras_libre.create(query,function (err, nuevo_usuario){
    console.log(query)
    console.log(nuevo_usuario)
    if(err)
      return res.status(500).send('Error en la peticion');
    if(!compras_libre)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });
});

//delete user
router.post('/delete-user/:id', function(req, res, next) {
  console.log("Entro al metodo")
  var id_user = req.params.id;
  console.log(id_user)
  //metodo para buscar el usuario
  usuario.find({'id': id_user})
  .then((rawResponse) =>{
    if(!rawResponse){
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      //metodo que cambia el stock
      usuario.updateOne({'id': id_user}, {'status': "Inactivo" })
      .then((usuario) => {
        console.log('update')
        console.log(usuario)
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
