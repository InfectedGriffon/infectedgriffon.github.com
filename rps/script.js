var yourroll = 0
var theirroll = 0

function rps() {
  yourroll = Math.floor(Math.random() * 3);
  theirroll = Math.floor(Math.random() * 3);
  if (yourroll == 2) {
    document.getElementById("youthrew").innerHTML = "rock";
  } else if (yourroll == 1) {
    document.getElementById("youthrew").innerHTML = "paper";
  } else {
  document.getElementById("youthrew").innerHTML = "scissors";
  }

  if (theirroll == 2) {
    document.getElementById("theythrew").innerHTML = "rock";
  } else if (theirroll == 1) {
   document.getElementById("theythrew").innerHTML = "paper";
  } else {
    document.getElementById("theythrew").innerHTML = "scissors";
  }
}