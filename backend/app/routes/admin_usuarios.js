var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');
var shajs = require('sha.js')

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


router.get('/all-users/:id', function(req, res, next) {
  var id_user = req.params.id;
  usuario.findOne({ id: id_user }, function (err, usuario){
      if(err)
        return res.status(500).send('Error en la peticion');
      if(!usuario)
        return res.status(404).send({message: 'Ningun registro identificado'});
    console.log(usuario)
    return res.send(usuario);
  });
});


/* GET user by id */
router.post('/login', function(req, res, next) {
  var datos = req.body;
  //console.log(id_user)
  usuario.findOne({ id: datos[0].value }, function (err, usuario){
      if(err)
        return res.send({message:'Error en la peticion'});
      if(!usuario)
        return res.send({message: 'Ningun registro identificado'});    
    var pass = shajs('sha256').update(datos[1].value).digest('hex')
    if(pass == usuario.datos_personles.password){
      console.log(usuario)
      return res.send({message:'Bienvenido', data:usuario});
    }else{
      return res.send({message:'Esta mal el correo o la contraseña'});
    }
    //if(usuario[0].password)
    
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
  var pass = shajs('sha256').update(specific_data[3].value).digest('hex')
  var query = {
    'id': specific_data[2].value,
    'datos_personles':
    {
      'nombre_completo':  specific_data[0].value,
      'username':         specific_data[1].value,
      'email':            specific_data[2].value,
      'password':         pass,
      'fecha_nacimiento': specific_data[4].value,
      'telefono':         specific_data[5].value
    },
    'domicilio':
    {
      'num_interior':     specific_data[6].value,
      'num_exterior':     specific_data[7].value,
      'calle':            specific_data[8].value,
      'colonia':          specific_data[9].value,
      'localidad':        specific_data[10].value,
      'municipio':        specific_data[11].value,
      'estado':           specific_data[12].value,
      'pais':             specific_data[13].value,
      'codigo_pais':      specific_data[14].value,
      'referencias':      specific_data[15].value
    },
    'status':             "Activo"
  }
  var user = specific_data[2].value;
  //console.log(user)
  usuario.find({'id': user})
  .then((rawResponse) =>{
    //console.log(rawResponse)
    //console.log(rawResponse.length)
    //console.log(rawResponse[0].datos_personles)
    if(rawResponse.length >= 1){
      console.log('es igual')
      return res.send({message: 'Este correo ya fue registrado, use uno diferente'})
    }else{
      console.log('no esta registrado')
      usuario.create(query,function (err, nuevo_usuario){
        if(err){
          return res.status(500).send('Error en la peticion');
        }
        if(!nuevo_usuario)
          return res.status(404).send({message: 'Ningun registro identificado'});
        else
          return res.send({message: 'Saved!'});
      });
    }
  })
  .catch((err) => {
    console.log(err)
    return res.status(500).send('Error en la peticion');
  });

  /*usuario.create(query,function (err, nuevo_usuario){
    if(err){
      return res.status(500).send('Error en la peticion');
    }
    if(!nuevo_usuario)
      return res.status(404).send({message: 'Ningun registro identificado'});
    else
      return res.status(404).send({message: 'Saved!'});
  });*/
});

//delete user
router.post('/delete-user/:id', function(req, res, next) {
  var id_user = req.params.id;
  console.log(data)
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
