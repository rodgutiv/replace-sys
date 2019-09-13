'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var PromocionesSchema = Schema({
  id_promo: String,
  ruta: String,
  nombre: String,
  descripcion: String,
  descuento: Number,
  status: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Promociones', PromocionesSchema);
