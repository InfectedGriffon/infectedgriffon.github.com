function rps() {
	const hands = ['rock', 'paper', 'scissors']; //list of hand symbols
  var yourroll = Math.floor(Math.random() * hands.length); //pick a random symbol for left side
  var theirroll = Math.floor(Math.random() * hands.length); //pick a random symbol for right side
	

	//change left side text and image to the symbol rolled
  document.getElementById("youthrew").innerHTML = hands[yourroll];
  document.getElementById("yourimage").src = "images/" + hands[yourroll] + "-red.png";

	//change right side text and image to the symbol rolled
	document.getElementById("theythrew").innerHTML = hands[theirroll];
  document.getElementById("theirimage").src = "images/" + hands[theirroll] + "-blue.png";  

	//find winner
	if (yourroll == theirroll) {
		document.getElementById("winner").innerHTML = "Winner:<br>Tie"; //tie
	} else if(yourroll == theirroll+1 || yourroll == theirroll-2) {
		/*
			1 - 3 > rock beats scissors
			2 - 1 > paper beats rock
			3 - 2 > scissors beats paper
		*/
		document.getElementById("winner").innerHTML = "Winner:<br>Left"; //left side wins
	} else {
		document.getElementById("winner").innerHTML = "Winner:<br>Right"; //right side wins
	}
	
}
