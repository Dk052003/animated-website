//Typing Animation
const roles = [
    "Web Developer",
    "Creator Coder",
    "Frontend Developer",
    "UI Designer",
];

const typingText = document.querySelector("#typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

if (typingText) {
    typeEffect();
}

//Scroll Animation
const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

//Contact Form Animation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const button = contactForm.querySelector("button[type='submit']");

        if (!button) return;

        button.textContent = "Sending...⏳";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Message Sent ✅";
            button.classList.remove("from-purple-600", "to-pink-500");
            button.classList.add("from-green-500", "to-emerald-500");

            contactForm.reset();

            setTimeout(() => {
                button.textContent = "Send Message 🚀";
                button.disabled = false;
                button.classList.remove("from-green-500", "to-emerald-500");
                button.classList.add("from-purple-600", "to-pink-500");
            }, 3000);
        }, 1200);
    });
}