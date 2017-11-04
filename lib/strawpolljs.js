// A simple wrapper for the strawpoll API.

//
//	Include our modules
//

req = require("request-promise"); //The request package, but with promises

//
//	Global Vars
//

const ver = "1.0.2";
const api = "http://www.strawpoll.me/api/v2/polls";
const panicExceptions = [
	"strawpolljs Panic [0]: No arguments supplied! Please give strawpolljs arguments when calling it's functions!",
	"strawpolljs Panic [1]: Error reaching the Strawpoll API!"
];

//
//	Base create function
//

exports.createPoll = function(options) {
	return new Promise((resolve, reject) => {
		//check for options
		if (!options) { reject(panicExceptions[0]) };

		//Specify Poll options
		pollOptions = {
			method: "POST",
			uri: api,
			followAllRedirects: true,
			json: true,
			body: options
		};

		req(pollOptions).then(function(body) {
			resolve(body); //return the result back to the function
		}).catch( function() {
			reject(panicExceptions[1]); //return panic reason
		});
	});
}

exports.readPoll = function(id) {
	return new Promise((resolve, reject) => {
		if (!id) { reject(panicExceptions[0]) };

		//prepare Poll options for GET request
		pollOptions = {
			method: "GET",
			uri: api + "/" + id,
			followAllRedirects: true,
		};

		req(pollOptions).then(function(body) {
			resolve(body);
		}).catch(function() {
			reject(panicExceptions[1]);
		});
	});
}

exports.getVersion = function() {
	//simply returns the version of the package
	return ver;
}
