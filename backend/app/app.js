var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var ayudaRouter = require('./routes/ayuda');
var comprasLibreRouter = require('./routes/compras_libre');

var adminPagosRouter = require('./routes/admin_pagos');
var adminProductosRouter = require('./routes/admin_productos');
var adminUsuariosRouter = require('./routes/admin_usuarios');
var adminComprasRouter = require('./routes/admin_ordenes_compra');

var adminNoticias = require('./routes/noticias');
var estadisticas = require('./routes/estadisticas');
var AdminProm = require('./routes/promociones');

var app = express();
var cors = require('cors');
app.use(cors("http://localhost:3000"));
app.use(cors("http://localhost:3000/web"));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(__dirname + '/public'));
app.use('/admin', express.static(__dirname + '/admin'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productosRouter);
app.use('/ayuda', ayudaRouter);
app.use('/compra', comprasLibreRouter);

app.use('/ad-pagos', adminPagosRouter);
app.use('/ad-productos', adminProductosRouter);
app.use('/ad-usuarios', adminUsuariosRouter);
app.use('/ad-compras', adminComprasRouter);

app.use('/noticias', adminNoticias);
app.use('/estadisticas', estadisticas);
app.use('/promociones', AdminProm);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
  next()
})
/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});*/

module.exports = app;

