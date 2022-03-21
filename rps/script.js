function rps() {
	const hands = ['nothing', 'rock', 'paper', 'scissors'];
  var yourroll = Math.floor(Math.random() * 3);
  var theirroll = Math.floor(Math.random() * 3);

 
  document.getElementById("youthrew").innerHTML = hands[yourroll];
  document.getElementById("yourimage").src = "images/" + hands[yourroll] + "-red.png";

	document.getElementById("theithrew").innerHTML = hands[theirtoll];
  document.getElementById("theirimage").src = "images/" + hands[theirroll] + "-red.png";  
}
