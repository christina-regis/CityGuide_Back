var usersController = require('../controllers/users_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
  .get(usersController.index)
  .post(usersController.create);

// router.route('/:id')
//   .get(usersController.show)
//   .patch(usersController.update)
//   .delete(usersController.destroy);

module.exports = router;
