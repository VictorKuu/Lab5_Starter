// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Current horn tracker
  var current_horn;

  // Image References
  var horn_image = document.querySelector("[src='assets/images/no-image.png']");
  var vol_image = document.querySelector("[src='assets/icons/volume-level-2.svg']");

  // Audio element reference
  var horn_audio = document.querySelector("audio");
  // Set the initial value to 0.5 to match the slider intial value
  horn_audio.volume = 0.5;

  // Set up horn selector event listener 
  var horn_select = document.getElementById("horn-select");
  
  horn_select.addEventListener("change", (event) => {
    horn_image.src = "assets/images/" + event.target.value + ".svg";
    horn_audio.src = "assets/audio/" + event.target.value + ".mp3";

    current_horn = event.target.value;
  });

  // Set up volume slider listener
  var vol_slider = document.getElementById("volume");

  vol_slider.addEventListener("change", (event) => {
    if (event.target.value == 0) {
      vol_image.src = "assets/icons/volume-level-0.svg";
      vol_image.alt = "Volume level 0";
    } else if (event.target.value < 33) {
      vol_image.src = "assets/icons/volume-level-1.svg";
      vol_image.alt = "Volume level 1";
    } else if (event.target.value >= 33 && event.target.value < 67) {
      vol_image.src = "assets/icons/volume-level-2.svg";
      vol_image.alt = "Volume level 2";
    } else {
      vol_image.src = "assets/icons/volume-level-3.svg";
      vol_image.alt = "Volume level 3";
    }

    horn_audio.volume = event.target.value / 100;
  });

  // Set up play sound event
  var button = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  button.addEventListener("click", (event) => {
    if (current_horn != undefined) {
      horn_audio.play();
      if (current_horn == "party-horn") {
        jsConfetti.addConfetti()
      }
    }
  });
}