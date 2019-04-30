'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var CarritoComprasSchema = Schema({
  id_compras: String,
  clave_productos: String,
  nombre: String,
  cantidades: Number,
  precio: Number,
  total: Number,
  fecha: Date
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('CarritoCompras', CarritoComprasSchema);
