var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var isAuth = req.isAuthenticated();
    res.render('index', { title: 'Admin part of site' });
});

module.exports = router;