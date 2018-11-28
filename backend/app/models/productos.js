'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var ProductosSchema = Schema({
  codigo: String,
  nombre: String,
  descripcion: String,
  tipo: String,
  marca: String,
  precio: Number,
  imagenes:[String],
  autos:[
    {
      modelo: String,
      anio: String,
      marca_auto: String,
      motor: String
    }
  ]
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Productos', ProductosSchema);
