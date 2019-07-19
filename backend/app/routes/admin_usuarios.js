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
  console.log(datos)
  console.log(datos.nombre)
  usuario.findOne({ id: datos.nombre }, function (err, usuario){
      if(err){
        return res.send({message:'Error en la peticion'});
      }
      if(!usuario){
        return res.send({message: 'Ningun registro identificado'});
      }else{
        var pass = shajs('sha256').update(datos.pass).digest('hex')
        if(pass == usuario.datos_personales.password){
          console.log('se envio')
          //console.log({success:true},{message:'Bienvenido '+usuario.datos_personales.username},{data:usuario})
          //return res.json({success:true},{message:'Bienvenido '+usuario.datos_personales.username},{data:usuario})

          return res.json({success:true,message:'Bienvenido '+usuario.datos_personales.username,data:{id:usuario.id,name:usuario.datos_personales.username}})
        }else{
          console.log('Esta mal el correo o la contraseña')
          return res.json({success:false,message:'Esta mal el correo o la contraseña'});
        }
        //if(usuario[0].password)
      }
    

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
    'datos_personales':
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
      'codigo_postal':    specific_data[15].value,
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
  var pass = shajs('sha256').update(specific_data.pass).digest('hex')
  console.log('datos1')
  console.log(specific_data)
  console.log(specific_data.email)
  var query = {
    'id': specific_data.email,
    'datos_personales':
    {
      'nombre_completo':  specific_data.nombre,
      'username':         specific_data.usuario,
      'email':            specific_data.email,
      'password':         pass
    },
    'status':             "Activo"
  }
  var user = specific_data.email;
  console.log('user')
  console.log(query)
  console.log(specific_data.email)
  usuario.find({'id': user})
  .then((rawResponse) =>{
    console.log(rawResponse)
    //console.log(rawResponse.length)
    //console.log(rawResponse[0].datos_personales)
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
