// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const image = document.querySelector("img");

  let voices = [];
  
  function loadVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = `
      <option value="select" disabled selected>Select Voice:</option>
    `;

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();

  button.addEventListener("click", () => {
    const text = textArea.value;

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    image.src = "assets/images/smiling-open.png";

    utterance.onend = () => {
      image.src = "assets/images/smiling.png";
    };

    window.speechSynthesis.speak(utterance);
  });
}