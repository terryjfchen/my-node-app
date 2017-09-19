console.log('user_service init...');
var UserDao = require('../dao/userDao');
var Async = require('async');//Need installation
var seq_obj = require('../dao/seq_obj');

exports.getUsers = function(req, res, next){
	console.log('get users');
	var name, phone;
	
	global.pool.getConnection(function(err, conn){
		if(err){
			console.log('err:'+err);
		}
		console.log('get conn done');

		// var tasks = [function(callback){
		// 	conn.query("select * from user where user_id=1;", function(err, rows){
		// 		console.log('first = '+JSON.stringify(rows));
		// 		callback(err, rows);
		// 	});
		// }, function(rows, callback){
		// 	console.log('second = '+JSON.stringify(rows));
		// 	conn.query("select * from user where user_id=2;", function(err, data){

		// 		console.log('third = '+JSON.stringify(data));
		// 		callback(err, data);
		// 	});
		// }
		// ];


		//利用async来顺序执行多个function，嵌套callback -->start
		var userDao = new UserDao(conn);

		var tasks = [function(callback){
			userDao.getUsers(callback);
		}, function(data, callback){
			console.log('second data =' + JSON.stringify(data));
			userDao.getUserById(callback);
		}];

		Async.waterfall(tasks, function(err, rows){
			console.log('final = '+JSON.stringify(rows));
			conn.release();
			res.send(JSON.stringify(rows));
		});
		//利用async来顺序执行多个function，嵌套callback -->end
	});
};

exports.getUsersSequelize = function(req, res, next){
	console.log('getUsersSequelize...');
	console.log('init seq_obj...');
	var result = seq_obj.query(1, 'Terry Chen');

	result.then(function(data){
		res.send(JSON.stringify(data));
	});
};