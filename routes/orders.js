var express = require('express');
var router = express.Router();
var order = require('../models/order.js');

router.get('/', function(req, res, next) { 
  order.find({}, function(err, orders){
		if (err)
		{
	          return next(err);
		}
		 
		console.log(typeof orders)
                res.json(orders);
    });
});

router.post('/', function(req, res, next) {
  order.create(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', function(req, res, next) {
  order.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  order.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
