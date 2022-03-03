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
      document.getElementById("yourimage").src = "images/paper-red.png";
      break;
    case 3:
      document.getElementById("youthrew").innerHTML = "scissors";
      document.getElementById("yourimage").src = "scissors/rock-red.png";
      break;
  }

  switch (theirroll) {
    case 1:
      document.getElementById("theythrew").innerHTML = "rock";
      document.getElementById("yourimage").src = "images/rock-blue.png";
      break;
    case 2:
      document.getElementById("theythrew").innerHTML = "paper";
      document.getElementById("yourimage").src = "images/paper-blue.png";
      break;
    case 3:
      document.getElementById("theythrew").innerHTML = "scissors";
      document.getElementById("yourimage").src = "scissors/rock-blue.png";
      break;
  }
}
