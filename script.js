const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');

startButton.addEventListener('click', () => {
  // Start-Rechteck ausblenden
  startBox.style.display = 'none';
  
  // Missions-Rechtecke anzeigen
  missionContainer.style.display = 'flex';
});
