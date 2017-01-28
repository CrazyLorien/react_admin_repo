var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/confirm', function(req, res, next) {
  res.render('../public/partial-views/confirm.html', { title: 'Order confirmation' });
});

module.exports = router;
