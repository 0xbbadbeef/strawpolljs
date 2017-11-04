# strawpolljs
A simple Strawpoll API wrapper for NodeJS

## Install

#### npm
~~~ bash
npm install strawpolljs
~~~

## Examples

#### Creating a strawpoll

You can simply create a new strawpoll like this:

~~~ javascript
strawpoll = require("strawpolljs");

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
});
~~~

strawpolljs uses promises, so you can read the poll data when the poll has been successfully created

~~~ javascript
strawpoll.createPoll({
  title: "This is the title of the poll", // The poll's title
	options: [ // An array of poll options
		"This is the first option",
		"This is the second option",
	],
}).then( function(response) {
  console.log(response); //The poll's data
};
~~~

#### Reading a straw poll

To read a strawpoll, all you need is the Identifcation Number (ID) of the particular poll

In our case, we will be reading poll '14323743's data
~~~ javascript
strawpoll.readPoll(14323743).then( function(result){ // Read poll '14323743's data
	console.log(result); // output the poll's data
});
~~~
