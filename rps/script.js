function rps() {
  var yourroll = Math.floor(Math.random() * 3);
  var theirroll = Math.floor(Math.random() * 3);

  switch (yourroll) {
    case 1:
      document.getElementById("youthrew").innerHTML = "rock";
       document.getElementById("yourimage").src = "images/rock-red.png";
      break;
    case 2:
      document.getElementById("youthrew").innerHTML = "paper";
      break;
    case 3:
      document.getElementById("youthrew").innerHTML = "scissors";
      break;
  }

  switch (theirroll) {
    case 1:
      document.getElementById("theythrew").innerHTML = "rock";
      break;
    case 2:
      document.getElementById("theythrew").innerHTML = "paper";
      break;
    case 3:
      document.getElementById("theythrew").innerHTML = "scissors";
      break;
  }
}
