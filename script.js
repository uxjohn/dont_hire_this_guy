//when button is submitted - check if there is an answer in the field

//if not create random number and bull from the blank field array

//else create random number and pull from answer array

//display answer in text field

var usersIdea = prompt("tell me your idea!");

function randomNumberFunction(upper) {
  	return Math.floor( (Math.random() * upper) + 1);
}

function thisGuysAnswer() {
if (usersIdea === "") {
	alert("You havent told me your idea?");
} else {
	var randomNumber = randomNumberFunction;
	alert("Sik idea brah! " + randomNumber(10));
	};
}

thisGuysAnswer();