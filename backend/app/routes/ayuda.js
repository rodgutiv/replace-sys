var express = require('express');
var router = express.Router();

/* GET all products */
router.get('/', function(req, res, next) {
  var data = req.body;
  var name = data[0].name;
  var from = data[1].from;
  var message = data[3].message;

  var nodemailer = require('nodemailer');
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '"'+name+'" <'+from+'>', // sender address
      to: 'gutierrez.v.rod@gmail.com', // list of receivers
      subject: 'AYUDA', // Subject line
      text: message, // plaintext body
      html: '<b>Enviado desde reface.com</b>' // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});
