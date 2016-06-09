var guidesController = require('../controllers/guides_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(guidesController.index)
  .post(guidesController.create);

router.route('/:id')
  .get(guidesController.show)
  .patch(guidesController.update)
  .delete(guidesController.destroy);

module.exports = router;
