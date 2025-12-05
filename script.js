const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');
const bgMusic = document.getElementById('bgMusic'); // Audio-Element

startButton.addEventListener('click', () => {
  // Start-Rechteck ausblenden
  startBox.style.display = 'none';
  
  // Missions-Rechtecke anzeigen
  missionContainer.style.display = 'flex';

  // Musik starten
  bgMusic.volume = 0.3; // Lautstärke 30%
  bgMusic.play();
});
