// Selecting elements
const presenteImg = document.querySelector(".presente");
const abertaImg = document.querySelector(".aberta");
const gatinhoImg = document.querySelector(".gatinho");
const title = document.querySelector(".title");
const balaos = document.querySelector(".balaos");
const audio = document.getElementById('background-music'); // Selecting the audio element
const musicButton = document.getElementById('music-button'); // Selecting the button

// Function to handle the presentation
function abrir() {
  presenteImg.classList.add('disable');
  abertaImg.classList.remove('disable');
  gatinhoImg.classList.remove('disable');
  title.classList.remove('disable');
  balaos.classList.remove('disable');

  setTimeout(() => {
    yt();
  }, 7000);
}

// Function to toggle audio playback
function toggleAudio() {
  if (audio.paused) {
    audio.play().catch(error => {
      console.log('Autoplay was prevented:', error);
    });
    musicButton.textContent = 'Pause Music';
  } else {
    audio.pause();
    musicButton.textContent = 'Play Music';
  }
}

// Add event listener to the button
musicButton.addEventListener('click', toggleAudio);

// Ensure audio plays when the page is loaded or upon user interaction
document.addEventListener('DOMContentLoaded', () => {
  // Optionally play the audio initially
  // audio.play().catch(error => console.log('Autoplay was prevented:', error));
});
