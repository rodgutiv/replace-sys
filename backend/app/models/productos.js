'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var ProductosSchema = Schema({
  codigo: String,
  clave_interna: String,
  nombre: String,
  descripcion: String,
  tipo: String,
  marca: String,
  precio: Number,
  autos:String,
  stock: Number,
  categoria: String,
  status: String,
  id_promo: String,
  pesado: String,
  outlet: String,
  fecha: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Productos', ProductosSchema);
