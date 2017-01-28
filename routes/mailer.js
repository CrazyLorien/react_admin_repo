var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var barberShopEmail = 'barberMailerMinsk@gmail.com';
var sendEmail = function (req,res,next) {
  var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: barberShopEmail,
            pass: '12345ASDF' 
        }
  });
    console.log(req.body);
    var text = 'Dear user ' + req.body.firstName + '\n\n' + 'please confirm your affirmation on visiting barber on ' + req.body.date;
      + '\n\n With best regards Funny Barber.';

  var mailOptions = {
    from: barberShopEmail, // sender address
    to: req.body.email, //req.body.email, // list of receivers
    subject: 'Visit confirmation', // Subject line
    text: text 
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
    
}

router.post('/', function(req,res,next){
    sendEmail(req,res,next);
});


module.exports = router;
