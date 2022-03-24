function rps() {
	const hands = ['rock', 'paper', 'scissors']; //list of hand symbols
  var yourroll = Math.floor(Math.random() * hands.length); //pick a random symbol for left side
  var theirroll = Math.floor(Math.random() * hands.length); //pick a random symbol for right side
	

	//change text and image to the symbol rolled
  document.getElementById("youthrew").innerHTML = hands[yourroll];
  document.getElementById("yourimage").src = "images/" + hands[yourroll] + "-red.png";

	//same for right side
	document.getElementById("theythrew").innerHTML = hands[theirroll];
  document.getElementById("theirimage").src = "images/" + hands[theirroll] + "-blue.png";  

	//find winner
	if (yourroll = theirroll) {
		//tie
	} else {
		var winner = Boolean(yourroll == theirroll+2 || yourroll == theirroll-1); //true for left, false for right
		document.getElementById("iwnner").innerHTML = winner;
		//if its two more or one less than right they win
		//1-3 > rock beats scissors
		//2-1 > paper beats rock
		//3-2 > scissors beats paper
	}
	
}
