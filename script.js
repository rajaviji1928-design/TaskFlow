// TASKFLOW - JAVASCRIPT

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("successMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button Animation
document.querySelectorAll(".primary-btn, .nav-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        button.style.transition = "0.2s";
    });
});

// Welcome Message
console.log("Welcome to TaskFlow!");
console.log("TaskFlow website loaded successfully.");