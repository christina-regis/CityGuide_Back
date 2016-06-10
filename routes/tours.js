var toursController = require('../controllers/tours_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(toursController.index)
  .post(toursController.create);

// router.route('/:id')
//   .get(toursController.show)
//   .patch(toursController.update)
//   .delete(toursController.destroy);

module.exports = router;
