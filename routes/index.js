const express = require('express');

let router = express.Router();

const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/s/getUsers', user_service.getUsers);
router.get('/s/getUsers', userController.getUserById);
router.get('/s/updateUser', userController.updateUser);

module.exports = router;
