/*
Author	: 		CJF
CreateDate	:   20170920
*/
exports.getUserById = async function (conn, userId) {
	console.log('userDao->getUserById userId:'+userId);
	let user = await conn.query("select * from user where user_id=?", [userId]);
	
	return user;
};

exports.updateUser = async function (conn, userId, name, phone){
	console.log('userDao->updateUser userId:'+userId);
	let result = await conn.query("update user set name=?,phone=? where user_id=?", [name, phone, userId]);
	
	return result;	
}