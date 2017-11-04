// Our module
const strawpoll = require("../lib/main.js");

//
//	Creating a poll
//

strawpoll.createPoll({
	title: "This is the title of the poll", // The poll's title
	options: [ // An array of poll options
		"This is the first option",
		"This is the second option",
		"hmm, let's make a third option!"
	],
	multi: true, // Allows multiple answers (Strawpoll will use a checkbox for the options)
	dupcheck: "normal", // IP Duplication check state
	captcha: true // Should strawpoll use a Captcha?
}).then( function(result){ // when the poll is created, do something
	console.log(result); // output our feedback
});