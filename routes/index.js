var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var isAuth = req.isAuthenticated();
    console.log(req.user);
    res.render('index', { title: 'Barbershop'});
});

module.exports = router;
