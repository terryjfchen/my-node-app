var Sequelize = require('sequelize'); //Need install mysql2

var sequelize = new Sequelize('mysql://root:123456@localhost:3306/test');

var User = sequelize.define('user', {
	user_id: {
		type: Sequelize.STRING,
		primaryKey: true,
		field: 'user_id',
	},
	name: {
		type: Sequelize.STRING,
		field: 'name',
	},
	phone: {
		type: Sequelize.STRING,
		field: 'phone',
	},
}, {
	freezeTableName: true,
	timestamps: false,
});

exports.get = function() {

	var http = require('http');
	var options = {
		hostname: 'wxtest.jyzq.cn',
		port: 80,
		path: '/w',
		method: 'GET'
	};
	var req = http.request(options, function(res) {
		console.log('status=' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			console.log('body=' + chunk);
		});
	});

	req.on('error', function(e) {
		console.log('get error=' + e.message);
	});

	req.write('data');
	req.end();
};

//cnpm install request
//cnpm install request-promise
	var rp = require('request-promise');
	var options = {
		method: 'POST',
		uri: 'http://wxtest.jyzq.cn/w',
		body: {
			data: 'test',
		},
		json: true,
	};
exports.rest_post = function(){
};

exports.query = async function(userId, name) {
	console.log('going to update');
	await User.update({
		'name': name,
	}, {
		'where': {
			'user_id': {
				$eq: userId,
			}
		}
	});
	console.log('going to get');
	var post_data = await rp(options);
	console.log('post_data='+JSON.stringify(post_data));

	console.log('going to select');
	let user = await User.findAll({
		where: {
			user_id: userId
		}
	});

	let user2 = await sequelize.query("select * from user;");
	console.log('user2=' + JSON.stringify(user2));

	return user;
};