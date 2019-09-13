'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var NoticiasSchema = Schema({
  ruta: String,
  categoria: String,
  titulo: String,
  contenido: String,
  fecha: String,
  status: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Noticias', NoticiasSchema);
