var express = require('express');
var ride_list = require('../controller/ride_list'); // import the controller
var router = express.Router();

router.get('/', function(req, res, next) {
  ride_list.view_pending(req, res, next);
});

module.exports = router;
