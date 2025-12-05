function resizeBackground() {
    const bg = document.getElementById('background');
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = 16 / 9;

    if (windowRatio > imageRatio) {
        // Bildschirm breiter als Bild
        bg.style.width = '100%';
        bg.style.height = 'auto';
    } else {
        // Bildschirm höher als Bild
        bg.style.width = 'auto';
        bg.style.height = '100%';
    }
}

// Event beim Laden und beim Ändern der Fenstergröße
window.addEventListener('load', resizeBackground);
window.addEventListener('resize', resizeBackground);
