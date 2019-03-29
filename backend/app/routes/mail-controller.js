var nodemailer = require('nodemailer')

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
        user: 'cotizacioncdosa@gmail.com',
        pass: 'Correo-CDOSA'
    }
})

exports.transporter = transporter
