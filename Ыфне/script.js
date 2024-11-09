
document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸️ Остановить";
    } else {
        audio.pause();
        this.textContent = "🎶 Играть \"Coco Jambo\"";
    }
});
