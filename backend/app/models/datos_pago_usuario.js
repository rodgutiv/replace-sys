'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var DatosPagoUsuarioSchema = Schema({
  id_user: String,
  numero_tarjeta: String,
  cvv: String,
  fecha_venc: Date,
  tipo_tarjeta: String,
  status: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('DatosPagoUsuario', DatosPagoUsuarioSchema);
