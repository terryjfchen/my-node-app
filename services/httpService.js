/*
Author	: 		CJF
CreateDate	:   20170920
Description	:   cnpm install request, cnpm install request-promise
*/

const rp = require('request-promise');

exports.post = async function(url, jsonData){
	const options = {
		method: 'POST',
		uri: url,
		body: {
			data: jsonData,
		},
		json: true,
	};
	let postResult = await rp(options);

	return postResult;
};