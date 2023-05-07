// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Variable for voice index
  var voice_idx = 0;

  // Get voice select element
  var select = document.getElementById("voice-select");

  // Get text area 
  var text_area = document.querySelector("textarea");

  // Get smiling image
  var smile_img = document.querySelector("img");

  // Get voice options
  const speechSynthesis = window.speechSynthesis;
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");

    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;

    select.appendChild(option);
  }

  // Set the voice option event listener
  select.addEventListener("change", (event) => {
    voice_idx = event.target.value;
  });

  // On click for speach utterance
  var button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    let utterance = new SpeechSynthesisUtterance(text_area.value);
    utterance.voice = voices[voice_idx];

    utterance.onstart = () => {
      smile_img.src = "assets/images/smiling-open.png";
    }

    utterance.onend = () => {
      smile_img.src = "assets/images/smiling.png";
    }

    speechSynthesis.speak(utterance);
  });
}