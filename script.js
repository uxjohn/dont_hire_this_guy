var usersIdea = prompt("tell me your idea!");

function randomNumberFunction(upper) {
  	return Math.floor( (Math.random() * upper) );
}

function thisGuysAnswer() {
	var randomNumber = randomNumberFunction(data.length);
	return data[randomNumber];
};

document.write( "<p>" + thisGuysAnswer() + "</p>");








