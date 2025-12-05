const startButton = document.getElementById('startButton');
const startBox = document.getElementById('startBox');
const missionContainer = document.getElementById('missionContainer');
const raetselContainer = document.getElementById('raetselContainer');

// Beispielcodes für die Rätsel
const correctCodes = ["1234", "5678", "9012", "3456", "7890"];

startButton.addEventListener('click', () => {
  startBox.style.display = 'none';           // Start-Rechteck ausblenden
  missionContainer.style.display = 'flex';   // Missions-Rechtecke anzeigen
  raetselContainer.style.display = 'flex';   // Rätsel anzeigen
});

// Prüfen der Rätsel
const checkButtons = document.querySelectorAll('.checkButton');

checkButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling.value;
    const resultText = button.nextElementSibling;

    if(input === correctCodes[index]) {
      resultText.textContent = "✅ Richtig!";
      resultText.style.color = "lightgreen";
    } else {
      resultText.textContent = "❌ Falsch!";
      resultText.style.color = "red";
    }
  });
});
