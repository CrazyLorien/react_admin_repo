var express = require('express');
var router = express.Router();
var User = require('../models/user')
var ObjectId = require('mongoose').Types.ObjectId;
var Role = require('../models/role');
var Permission = require('../models/permission');

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

router.get('/users/name/:name', function (req, res, next) {
    var query = User.findOne({ name: req.params.name });
    query.exec();

    query.then(function (user) {
        res.json(user);
    })
});

router.get('/users/:id', function (req, res, next) {
    var query = User.findOne({ _id: req.params.id });

    query.exec();

    query.then(function (user) {
        if (req.params.id == 'undefined') {
            next(new Error("Wrong id"))
        }

        res.json(user);
    })
});

router.post('/users/create', function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            // you could avoid http status if you want. I put error 500 
            return res.status(500).send({
                success: false,
                message: 'user already exist!'
            });
        }
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

        res.json(roles);
    });
});

router.get('/roles/:id', function (req, res, next) {
    var query = Role.findOne({ _id: req.params.id });

    query.exec(function (err, role) {
        if (req.params.id == 'undefined') {
            next(new Error("Wrong id"))
        }
        res.json(role);
    });


});

router.post('/roles/create', function (req, res, next) {
    var query = Role.find({});
    var role = new Role(req.body);
    role.save(function (err, post) {
        if (err) {
            // you could avoid http status if you want. I put error 500 
            return res.status(500).send({
                success: false,
                message: 'Role already exist!'
            });
        }
        res.json(post);
    });
});

router.put('/roles/:id/update', function (req, res, next) {
    Role.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, role) {
        if (err) return next(err);
        res.json(role);
    });
});

router.delete('/roles/:id/delete', function (req, res, next) {
    var query = Role.find({});

    query.exec(function (err, roles) {
        if (err) {
            return next(err);
        }

        res.json(roles);
    });
});

//permissions
router.get('/permissions', function (req, res, next) {
    var query = Permission.find({});
    query.exec(function (err, pm) {
        if (err) {
            return next(err);
        }

        res.json(pm);
    });
});

router.post('/permissions/create', function (req, res, next) {
    var permission = new Permission(req.body);
    permission.save(function (err, pm) {
        if (err)
            return next(err);
        res.json(pm);
    });
});


router.put('/permissions/:id/update', function (req, res, next) {
    Permission.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, pm) {
        if (err) return next(err);
        res.json(pm);
    });
});

module.exports = router;