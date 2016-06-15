var guidesController = require('../controllers/guides_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .post(guidesController.authenticate);


module.exports = router;
