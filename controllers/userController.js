/*
Author	: 		CJF
CreateDate	:   20170920
Description	:   Connection, beginTransaction, commit, rollback, release should be handled in service layer
*/
const userService = require('../services/userService');

exports.getUserById = function(req, res, next){
	let userId = req.query.userId;
	console.log('get user in controller userId:'+userId);
	let result = userService.getUserById(userId);

	result.then(function(data){
		res.send(JSON.stringify(data));
	});
};

exports.updateUser = function(req, res, next){
	let result = userService.updateUser(req);

	result.then(function(data){
		res.send(JSON.stringify(data));
	});
};