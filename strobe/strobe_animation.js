$(function() {
  var spinnerSpeed = 1; // seconds for one 360 rotation
  var deltaSpeed   = 0.01; // delta for reduce/increase
  var refreshRate  = 60;
  var spinner      = document.getElementById("spinner");

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

  $( "#speed_slider" ).slider({
    step: deltaSpeed,
    max: 2,
    min: 0.01,
    change: function(event, ui) {
      spinner.style.animation = $( "#speed_slider" ).slider("value") + "s rotatecircle infinite linear";
    }
  });

  function increaseSpeed() {
      if(spinnerSpeed - deltaSpeed > 0) spinnerSpeed -= deltaSpeed;
  }

  function reduceSpeed() {
    spinnerSpeed += deltaSpeed;
  }

  function stopSpinner() {
    //spinnerSpeed = 1 / refreshRate;
    spinnerSpeed = 0.0166829; // must be 1/60
  }
});