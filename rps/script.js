function rps() {
	const hands = ['rock', 'paper', 'scissors'];
  var yourroll = Math.floor(Math.random() * 3);
  var theirroll = Math.floor(Math.random() * 3);

 
  document.getElementById("youthrew").innerHTML = hands[yourroll];
  document.getElementById("yourimage").src = "images/" + hands[yourroll] + "-red.png";

	document.getElementById("theirthrew").innerHTML = hands[theirroll];
  document.getElementById("theirimage").src = "images/" + hands[theirroll] + "-blue.png";  
}
