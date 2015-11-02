var usersIdea = prompt("tell me your idea!");

var data = [
"Hello",
"Yo Yo",
"Bonjour",
"Howdy"
];

function randomNumberFunction(upper) {
  	return Math.floor( (Math.random() * upper) );
}

function thisGuysAnswer() {
	var randomNumber = randomNumberFunction(data.length);
	return data[randomNumber];
};

alert( thisGuysAnswer() );






