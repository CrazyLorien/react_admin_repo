var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var isAuth = req.isAuthenticated();
    debugger;
    console.log(req.user);
    res.render('index', { title: 'Barbershop', isAuthenticated:isAuth, username: req.user != undefined ? req.user.name : "" });
});

module.exports = router;
