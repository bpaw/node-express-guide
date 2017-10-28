var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/other_me', function(req, res) {
	var other_me = {
		"name" : "other brandon"
	};
	res.json(other_me);
});

module.exports = router;
