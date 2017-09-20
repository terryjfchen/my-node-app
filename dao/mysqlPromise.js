/*
Author	: 		CJF
CreateDate	:   20170920
*/
const mysql = require('promise-mysql');
exports.pool = mysql.createPool({
	hhost: 'localhost',
	user: 'root',
	password: '123456',
	database: 'test',
	port: 3306,
	connectionLimit: 10
});