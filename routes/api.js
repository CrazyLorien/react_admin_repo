var express = require('express');
var router = express.Router();
var User = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId;

//users

router.get('/users', function (req, res, next) {
    var query = User.find({});

    query.exec(function (err, users) {
        if (err) {
            return next(err);
        }

        res.json(users);
    });
});

router.get('/users/:name', function (req, res, next) {
    var query = User.findOne({ name: req.params.name });

    query.exec();

    query.then(function (user) {
        res.json(user);
    })
});

router.post('/users/:id', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) return next(err);
        res.json(user);
    });
});


router.put('/users/:id/update', function (req, res, next) {
    console.log(req)
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


//roles
router.get('/roles', function (req, res, next) {
    var query = Role.find({});

    query.exec(function (err, roles) {
        if (err) {
            return next(err);
        }

        res.json(users);
    });
});

router.post('/roles/:id', function (req, res, next) {
    var query = Role.find({});

    Role.save(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });

    res.json(users);
});


router.put('/roles/:id/update', function (req, res, next) {
    var query = Role.find({});

    Role.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, role) {
        if (err) return next(err);
        res.json(role);
    });
});

router.delete('/roles/:name/delete', function (req, res, next) {
    var query = Role.find({});

    query.exec(function (err, roles) {
        if (err) {
            return next(err);
        }

        res.json(roles);
    });
});



//permissions

module.exports = router;