// Our module
const strawpoll = require("strawpolljs");

//
//	Reading a poll
//

strawpoll.readPoll(14323743).then( function(result){ // Read poll '14323743's data
	console.log(result); // output the poll's data
});
