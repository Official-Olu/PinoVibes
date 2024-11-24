document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.querySelector(".welcome-text");
    const pinoVibes = document.querySelector(".pino-vibes");
    const pinoButton = document.getElementById("pinoButton");
    const ticketModal = document.getElementById("ticketModal");
    const closeBtn = document.querySelector(".ticket .close-btn");

    // Add letter-by-letter animation for "Welcome to PinoNation"
    const welcomeTextContent = "Welcome to PinoNation";
    let welcomeTextHTML = '';

    welcomeTextContent.split('').forEach((letter, index) => {
        if (letter === ' ') {
            welcomeTextHTML += `<span class="letter" style="animation-delay: ${index * 0.1}s">&nbsp;</span>`;
        } else {
            welcomeTextHTML += `<span class="letter" style="animation-delay: ${index * 0.1}s">${letter}</span>`;
        }
    });
    welcomeText.innerHTML = welcomeTextHTML;

    // Trigger "PinoVibes says Hi" animation after a delay (after "Welcome to PinoNation" animation)
    setTimeout(() => {
        pinoVibes.style.opacity = 1;
        pinoVibes.style.animation = "slideUp 3s forwards";

        // The button is handled through CSS animation, no need for JS opacity changes.
    }, welcomeTextContent.length * 0.1 * 1000); // Time after the last letter of welcome text

    // Add event listener to the button
    pinoButton.addEventListener("click", () => {
        // Show the modal
        ticketModal.style.display = "flex";
    });

    // Add event listener to the close button inside the ticket
    closeBtn.addEventListener("click", () => {
        ticketModal.style.display = "none"; // Close the modal when the close icon is clicked
    });

    // Close the modal if the user clicks outside of the ticket
    window.addEventListener("click", (event) => {
        if (event.target === ticketModal) {
            ticketModal.style.display = "none";
        }
    });
});
