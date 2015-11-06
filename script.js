document.getElementById('response').innerHTML = "Hi, I am kind of a big deal around here.  Tell me your idea, lets see how innovative you are!";

//Create random number
function randomNumberFunction(upper) {
  	return Math.floor( (Math.random() * upper) );
};

//The charicters random answer
function thisGuysAnswer() {
	var randomNumber = randomNumberFunction(data.length);
	var idea = document.getElementById("idea").value;

	if (idea === "") {
		document.getElementById('response').innerHTML = "You need to tell me your idea";
	} else {
		document.getElementById('response').innerHTML = data[randomNumber];
	};
	
};