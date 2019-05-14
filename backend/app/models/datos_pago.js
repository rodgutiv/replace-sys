'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var DatosPagoSchema = Schema({
  id_compras: String,
  numero_tarjeta: String,
  cvv: String,
  fecha_venc: Date,
  tipo_tarjeta: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('DatosPago', DatosPagoSchema);
