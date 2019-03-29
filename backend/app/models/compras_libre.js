'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var ComprasLibreSchema = Schema({
  id: String,
  datos_personales:
  {
    nombre_completo: String,
    email: String,
    telefono: String,
  },
  datos_entrega:
  {
    codigo_postal: String,
    estado: String,
    municipio: String,
    calle: String,
    num_interior: String,
    num_exterior: String,
    colonia: String,
    referencias: String
  },
  clave_productos: [String],
  cantidades: [Number]
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('ComprasLibre', ComprasLibreSchema);
