var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/approve', function(req, res, next) {
  res.render('../public/partial-views/client.html', { title: 'Client Information' });
});

module.exports = router;
