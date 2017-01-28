var express = require('express');
var router = express.Router();
var model = require('../models/review.js');

 
router.get('/', function(req, res, next) {
  model.find({}, function(e, rews){            
            res.json(rews);
          });    
});

router.post('/', function(req, res, next) {
  model.create(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
