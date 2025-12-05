// Sicherstellen, dass das Script erst nach Laden der Seite reagiert
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("checkButton");
    const input = document.getElementById("codeInput");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        if (input.value === "5443") {
            message.style.color = "#00ff8c";
            message.textContent = "Du hast es geschafft!";
        } else {
            message.style.color = "#ff4444";
            message.textContent = "Falsches Passwort — versuch es nochmal.";
            input.value = "";
            input.focus();
        }
    });

    // Optional: Enter-Taste unterstützt
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            button.click();
        }
    });
});
