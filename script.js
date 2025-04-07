document.addEventListener("DOMContentLoaded", function () {
    const startGameButton = document.getElementById("start-game");
    const bubbleContainer = document.getElementById("bubble-container");

    startGameButton.addEventListener("click", function () {
        bubbleContainer.style.display = "flex"; // Show bubbles
        createBubbles();
        startGameButton.style.display = "none"; // Hide button after starting
    });

    function createBubbles() {
        bubbleContainer.innerHTML = ""; // Clear existing bubbles
        for (let i = 0; i < 30; i++) {
            let bubble = document.createElement("div");
            bubble.classList.add("bubble");

            // Pop sound effect
            bubble.addEventListener("click", function () {
                let popSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4389");
                popSound.play();
                bubble.style.background = "#d0eaff"; // Change color when popped
                setTimeout(() => bubble.remove(), 200); // Remove after pop
            });

            bubbleContainer.appendChild(bubble);
        }
    }
});
