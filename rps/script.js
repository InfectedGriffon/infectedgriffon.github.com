function rps() {
  var yourroll = Math.floor(Math.random() * 3);
  var theirroll = Math.floor(Math.random() * 3);

  switch (yourroll) {
    case 1:
      document.getElementById("youthrew").innerHTML = "rock";
    case 2:
      document.getElementById("youthrew").innerHTML = "paper";
    case 3:
      document.getElementById("youthrew").innerHTML = "scissors";
  }

  switch (theirroll) {
    case 1:
      document.getElementById("theythrew").innerHTML = "rock";
    case 2:
      document.getElementById("theythrew").innerHTML = "paper";
    case 3:
      document.getElementById("theythrew").innerHTML = "scissors";
  }
}
