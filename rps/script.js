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
}
