var mysql = require('mysql');

var db_config = {
	host : 'localhost',
	user : 'root',
	password : '123456',
	database : 'test',
	port : 3306,
};

exports.pool = mysql.createPool(db_config);

// async function test (){
// 	var pool = await mysql.createPool(db_config);
// 	console.log('mysql pool init...')
// 	var conn = await pool.getConnection();
// 	console.log('got conn');
// 	var user = await conn.query("select * from user");
// 	console.log(JSON.stringify(user));
// }
// test();
// exports.query = function(sqlstr){
// 	pool.getConnection(function(err, conn){
// 		console.log('err:'+err);
// 		conn.query(sqlstr, function(err, rows, fields){
// 			conn.release();
// 			console.log('query result' + JSON.stringify(rows));
// 		});
// 	});
// };