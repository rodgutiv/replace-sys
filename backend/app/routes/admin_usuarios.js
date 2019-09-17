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

/* GET user by id */
router.post('/datos', function(req, res, next) {
  var datos = req.body;
  console.log(datos)
  usuario.findOne({ id: datos.id }, function (err, usuario){
      if(err){
        return res.send({message:'Error en la peticion'});
      }
      if(!usuario){
        return res.send({message: 'Ningun registro identificado'});
      }else{
        console.log(usuario)
        return res.json({success:true,message:'Encontrado',data:usuario})
      }
    

  });
});

/* Update user */
router.post('/update-user', function(req, res, next) {

  var specific_data = req.body;
  console.log('Datos de usuario a actualizar')
  console.log(specific_data)
  var id_user = specific_data.id_user
  console.log(id_user)
  //metodo para buscar el usuario
  usuario.findOne({'id': id_user})
  .then((rawResponse) =>{
    if(!rawResponse){
      console.log(rawResponse)
      return res.status(404).send({message: 'Ningun registro identificado'});
    }else{
      console.log('correcto')
      console.log(rawResponse.datos_personales.nombre_completo)
      //metodo que cambia el stock
      var query = {
        'datos_personales':
        {
          'nombre_completo':  specific_data.nombre,
          'username':         rawResponse.datos_personales.usuario,
          'email':            specific_data.email, 
          'password':         rawResponse.datos_personales.password,
          'telefono':         specific_data.telefono
        },
        'domicilio':
        {
          'num_interior':     specific_data.num_interior,
          'calle':            specific_data.calle,
          'colonia':          specific_data.colonia,
          'municipio':        specific_data.municipio,
          'estado':           specific_data.estado,
          'pais':             specific_data.pais,
          'codigo_postal':    specific_data.codigo_postal
        }
      }
      console.log(query)
      usuario.updateOne({'id': id_user}, query)
      .then((usuario) => {
        console.log('update')
        console.log(usuario)        
        return res.json({success:true,message:'Datos guardados '})
        
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
      'password':         pass,
      'telefono':         ""
    },
    'domicilio':
    {
      'num_interior':     "",
      'calle':            "",
      'colonia':          "",
      'municipio':        "",
      'estado':           "",
      'pais':             "",
      'codigo_postal':    ""
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
