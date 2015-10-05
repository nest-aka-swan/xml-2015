$(function() {
  var refreshRate = 60; // 60Hz
  var degrees = 0; // degree counter

  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case 37:
        //reduceSpeed();
        break;
      case 39:
        //increaseSpeed();
        break;
      case 32:
        //stopSpinner();
        break;
      default:
        return;
    }
  });

  // wanna spin 360 degrees refreshRate times per second
  var speed = 1 / (refreshRate * 1000 * 360);
  var spinner = document.getElementById("spinner");
  var rotation = setInterval(rotateSpinner, speed);
  //var stop = setTimeout(function() { clearInterval(rotation) }, 8000);
  //benchmark();

  function rotateSpinner() {
    if(degrees > 360) degrees = 0;
    spinner.style.transform = "rotate(" + degrees++ + "deg)";
  }

  function increaseSpeed() {
      if(spinnerSpeed - deltaSpeed > 0) spinnerSpeed -= deltaSpeed;
  }

  function reduceSpeed() {
    spinnerSpeed += deltaSpeed;
  }

  function stopSpinner() {
    spinnerSpeed = 0.016682; // must be 1/60
  }

  function benchmark() {
    var t0 = performance.now();
    rotateSpinner();
    var t1 = performance.now();
    console.log("Call to rotateSpinner took " + (t1 - t0) + " milliseconds.")
  }
});