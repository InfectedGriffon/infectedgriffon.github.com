var countDownDate = new Date("April 1, 2022 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timeleft").innerHTML = days + " Days<br> " + hours + " Hours<br> " + minutes + " Minutes<br> " + seconds + " Seconds<br> ";

  if (distance < 0) {
    clearInterval(x);
  document.getElementById("timeleft").innerHTML = "EXPIRED";
  }

	var loadingDots = (60-seconds) % 4;
	document.getElementById("comingsoon").innerHTML = "Coming Soon" + ".".repeat(loadingDots);
}, 1000);