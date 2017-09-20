/*
Author	: 		CJF
CreateDate	:   20170920
Description	:   Connection, beginTransaction, commit, rollback, release should be handled in service layer
*/
var userDao = require('../dao/userDao');

exports.getUserById = async function(userId) {
	console.log('get user in service');
	let user, conn;
	try {
		conn = await global.pool.getConnection();
		user = await userDao.getUserById(conn, userId);
	} catch (err) {
		console.log(err.message);
	} finally {
		if (!conn) {
			conn.end();
		}
	}

	return user;
};

exports.updateUser = async function(req) {
	console.log('get user in service');
	let result, conn, userId, name, phone;

	try {
		userId = req.query.userId;
		name = req.query.name;
		phone = req.query.phone;

		conn = await global.pool.getConnection();
		conn.beginTransaction();

		result = await userDao.updateUser(conn, userId, name, phone);
		
		//Result is defined and only one row updated
		if(result && result.affectedRows==1){
			conn.commit();
		}else{
			throw new Error(result)
		}
	} catch (err) {
		conn.rollback();
		console.log(err.message);
	} finally {
		if (!conn) {
			conn.end();
		}
	}

	return result;
};