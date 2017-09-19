module.exports = function(dbConn) {
	var conn = dbConn;

	this.getUsers = function(callback) {
		this.conn.query("select * from user;", function(err, rows) {
			console.log('getUsers = ' + JSON.stringify(rows));
			callback(err, rows);
		});
	};

	this.getUserById = function(callback) {
		this.conn.query("select * from user where user_id=1;", function(err, rows) {
			console.log('getUserById = ' + JSON.stringify(rows));
			callback(err, rows);
		});
	};
};