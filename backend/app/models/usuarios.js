'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UsuariosSchema = Schema({
  id: String,
  datos_personles:
  {
    nombre_completo: String,
    username: String,
    email: String,
    password: String,
    fecha_nacimiento: String,
    teléfono: String
  },
  domicilio:
  {
    num_interior: String,
    num_exterior: String,
    calle: String,
    colonia: String,
    localidad: String,
    municipio: String,
    estado: String,
    pais: String,
    codigo_pais: String,
    referencias: String
  },
  forma_pago: String
});


// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Usuarios', UsuariosSchema);
