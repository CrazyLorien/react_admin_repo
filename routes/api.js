var express = require('express');
var router = express.Router();
var service = require('../models/service.js');
var barber = require('../models/barber.js');
var user = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/services', function(req, res, next) {  
  if (req.query.masterId) {      
        var query = { _id: new ObjectId(req.query.masterId) };
        barber.findOne(query, function(e, master){
          if(master === null)
	      return;
	
        if (e || master.length === 0) {
          console.log(e);
        }
        
        var idList = master.services.map(function(id){ return id.toString(); });
        
        service.find({serviceId: { $in: idList}}, function(e, docs){            
            res.json(docs);
          });
      });
  }else{
    service.find({}, function(e, docs){            
            res.json(docs);
          });
  }    
});

router.post('/services', function(req, res, next) {
  service.create(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/services/:id', function(req, res, next) {
  service.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/services/:id', function(req, res, next) {  
  service.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/barbers', function(req, res, next) {  
  var query = barber.find();
    
  if (req.query.masterId) {    
    query.where({ masterId: req.query.masterId });
  }

  query.exec(function(err, masters) {
    if (err) {      
      return next(err);
    }
    
    res.json(masters);
  });  
});

router.post('/barbers', function(req, res, next) {
  barber.create(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/barbers/:id', function(req, res, next) {    
    barber.findOneAndUpdate({masterId :req.params.id}, req.body, function (err, post) {
    if (err) {      
      return next(err);
    }
    res.json(post);
  });
});

router.delete('/barbers/:id', function(req, res, next) {
    var query = barber.find({ masterId: req.query.id});
    query.remove().exec(function(err) {
      if (err) {
        return next(err)
      };

      res.sendStatus(200);
    });
});


router.get('/users', function(req, res, next) {  
  var query = user.find();
    
  query.exec(function(err, users) {
    if (err) {      
      return next(err);
    }
    
    res.json(users);
  });  
});

module.exports = router;
