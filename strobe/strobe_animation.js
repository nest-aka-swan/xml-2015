$(function() {
  var spinnerSpeed = 1; // seconds for one 360 rotation
  var deltaSpeed   = 0.01; // delta for reduce/increase
  var spinner = document.getElementById("spinner");

  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case 32:
        stopSpinner();
        break;
      case 37:
        reduceSpeed();
        break;
      case 39:
        increaseSpeed();
        break;
      default:
        return;
    }

    spinner.style.animation = spinnerSpeed + "s rotatecircle infinite linear";
  });

  function increaseSpeed() {
      if(spinnerSpeed - deltaSpeed > 0) spinnerSpeed -= deltaSpeed;
  }

  function reduceSpeed() {
    spinnerSpeed += deltaSpeed;
  }

  function stopSpinner() {
    spinnerSpeed = 0.0166829; // must be 1/60
  }
});