var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 's***@xyz.com',
    pass: 'xyzxyz'
  }
});

var mailOptions = {
  from: 's***@xyz.com',
  to: 's***@xyz.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

//multiple receivers
var mailOptions_multiple = {
  from: 's***@xyz.com',
  to: 's***@xyz.com, v***@xyz.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

//send html
var mailOptions_html = {
  from: 's***@xyz.com',
  to: 's***@xyz.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// visit myaccount.google.com and under the security section switch on the access to less secure apps
