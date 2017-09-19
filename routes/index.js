var express = require('express');

var mysql_obj = require('../dao/mysql_obj');
global.pool = mysql_obj.pool;
console.log('pool='+global.pool);

var router = express.Router();

var user_service = require('../services/user_service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/s/getUsers', user_service.getUsers);
router.get('/s/getUsers', user_service.getUsersSequelize);

module.exports = router;
