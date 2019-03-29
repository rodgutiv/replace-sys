var express = require('express');
var router = express.Router();

/* GET all products */
router.post('/', function(req, res, next) {

  var data = req.body;
  console.log(data);
  var name = data[0].value;
  var from = data[1].value;
  var message = data[2].value;
  console.log(name);
  console.log(from);
  console.log(message);
  var nodemailer = require('nodemailer');
  // create reusable transporter object using the default SMTP transport
  console.log('cargo nodemailer');
  var data = 'smtps://' + from + ':pass'
  //var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
  var transporter = nodemailer.createTransport({
      protocol: "SMTP",
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      secureOptions: { "rejectUnauthorized": false },
      tls: {
          rejectUnauthorized: false,
      },
      auth: {
          user: from,
          pass: 'confundidoro'
      }
  })
  // setup e-mail data with unicode symbols
    console.log('cargo transporte');
  var mailOptions = {
      from: '"'+name+'" <'+from+'>', // sender address
      to: 'gutierrez.v.rod@gmail.com', // list of receivers
      subject: 'AYUDA', // Subject line
      text: message, // plaintext body
      html: '<b>Enviado desde reface.com</b>' // html body
  };
    console.log('cargo opciones de mail');
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
