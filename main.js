window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");

    eyes.forEach((eye) => {
        const pupil = eye.querySelector(".pupil");
        const eyeRect = eye.getBoundingClientRect();

        // Calculate the center of the eye
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle to mouse
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // Set pupil movement range (adjusted for oval shape)
        const maxMovementX = (eyeRect.width - pupil.offsetWidth) / 2;
        const maxMovementY = (eyeRect.height - pupil.offsetHeight) / 2;
        const pupilX = Math.cos(angle) * maxMovementX;
        const pupilY = Math.sin(angle) * maxMovementY;

        // Apply pupil position
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});

// Function to make eyes blink smoothly
function blinkEyes() {
    const eyelids = document.querySelectorAll(".eyelid");

    eyelids.forEach((eyelid) => {
        eyelid.style.transform = "scaleY(1)"; // Close eyes
    });

    setTimeout(() => {
        eyelids.forEach((eyelid) => {
            eyelid.style.transform = "scaleY(0)"; // Open eyes
        });
    }, 150); // Blinking duration
}

// Blink every 3-6 seconds randomly
setInterval(() => {
    blinkEyes();
}, Math.random() * 3000 + 3000);

const words = ["DEVELOPER", "ACTOR", "VOICE ARTIST", "YOUTUBER", "DESIGNER", "EDITOR", "WRITER"];

// Split words into two groups
const half = Math.ceil(words.length / 2);
const upperWords = words.slice(0, half);  // First half for upper row
const lowerWords = words.slice(half);     // Second half for lower row

const upperContainer = document.getElementById("upper-word");
const lowerContainer = document.getElementById("lower-word");

let wordIndex = 0;

function updateWords() {
    const upperWord = upperWords[wordIndex % upperWords.length].split("");
    const lowerWord = lowerWords[wordIndex % lowerWords.length]?.split("") || [" "]; // Handle uneven words

    upperContainer.innerHTML = "";
    lowerContainer.innerHTML = "";

    // Create letter spans for upper and lower words
    upperWord.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter", "in");
        upperContainer.appendChild(span);

        // Delay appearance
        setTimeout(() => {
            span.classList.remove("in");
        }, i * 100);
    });

    lowerWord.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter", "in");
        lowerContainer.appendChild(span);

        // Delay appearance
        setTimeout(() => {
            span.classList.remove("in");
        }, i * 100);
    });

    // Keep words on screen for 4 seconds before disappearing
    setTimeout(() => {
        const upperLetters = document.querySelectorAll("#upper-word .letter");
        const lowerLetters = document.querySelectorAll("#lower-word .letter");

        upperLetters.forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.add("out");
            }, i * 100);
        });

        lowerLetters.forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.add("out");
            }, i * 100);
        });
    }, 4000); // Wait for 4 seconds before fading out

    // Switch to next words
    setTimeout(() => {
        wordIndex = (wordIndex + 1) % upperWords.length;
        updateWords();
    }, 5000); // Full cycle before next words
}

// Start the effect
updateWords();


document.addEventListener("scroll", function () {
    let aboutSection = document.querySelector("#about"); // Replace with the actual class or ID of your "About Me" section
    let eyes = document.querySelector(".eyes-container");
    let aboutPosition = aboutSection.getBoundingClientRect().top; // Get distance of "About Me" from viewport top
    let screenHeight = window.innerHeight; // Get screen height

    if (aboutPosition < screenHeight / 2) {
        // Move eyes left when "About Me" comes into view
        eyes.style.transform = "translate(-25vw, 90vh)";
    } else {
        // Reset eyes when scrolling back up
        eyes.style.transform = "translate(0px, 0px)";
    }
});




function wakeUpBlink() {
    let eyes = document.querySelectorAll(".eye"); // Adjust selector based on your HTML structure

    // Start with eyes closed
    gsap.set(eyes, { opacity: 0 });

    // Delay, then open eyes after 3-4 seconds
    gsap.to(eyes, { opacity: 1, delay: 1, duration: 2 });

    // Rapid blinking effect for a few seconds
    let rapidBlinks = gsap.timeline({ delay: 1 });
    for (let i = 0; i < 5; i++) {
        rapidBlinks.to(eyes, { opacity: 0, duration: 0.1 });
        rapidBlinks.to(eyes, { opacity: 1, duration: 0.1 });
    }

    // Resume normal blinking
    rapidBlinks.to(eyes, {
        repeat: -1,
        yoyo: true,
        opacity: 1,
        duration: 0.2,
        repeatDelay: 2, // Normal blink interval
    });
}

window.onload = wakeUpBlink;


document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".sec");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w1");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w2");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w3");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w4");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w5");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#w6");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".horizontal-scroll");
let sections = gsap.utils.toArray(".h-section");
let progressBar = document.querySelector(".progress-bar");
let checkpoints = document.querySelectorAll(".checkpoint");
// Ensure .horizontal-scroll width matches total sections
container.style.width = `${sections.length * 60}vw`;

gsap.to(container, {
    x: () => `-${(sections.length - 1) * 37}vw`, // Moves precisely to last section
    ease: "none",
    scrollTrigger: {
        trigger: "#projects",
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`, // Ensures it stops correctly
        invalidateOnRefresh: true, // Fixes resize issues
        onUpdate: (self) => {
            // Progress Bar Animation
            let progress = self.progress * 100;
            progressBar.style.width = `${progress}%`;

            // Activate Checkpoints
            checkpoints.forEach((checkpoint, index) => {
                if (progress >= index * (100 / (sections.length - 1))) {
                    checkpoint.classList.add("active");
                } else {
                    checkpoint.classList.remove("active");
                }
            });
        }
    }
});


function applyResponsiveJS() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        document.addEventListener("scroll", function () {
            let aboutSection = document.querySelector("#about"); // Replace with the actual class or ID of your "About Me" section
            let eyes = document.querySelector(".eyes-container");
            let aboutPosition = aboutSection.getBoundingClientRect().top; // Get distance of "About Me" from viewport top
            let screenHeight = window.innerHeight; // Get screen height

            if (aboutPosition < screenHeight / 2) {
                // Move eyes left when "About Me" comes into view
                eyes.style.transform = "translate(0px, 550px)";
            } else {
                // Reset eyes when scrolling back up
                eyes.style.transform = "translate(0px, 0px)";
            }
        });
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        

    }
}

// Run when window resizes
window.addEventListener("resize", applyResponsiveJS);


document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh1");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh2");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh3");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh4");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh5");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#hh6");

    function toggleAnimation() {
        if (window.innerWidth <= 1000) {
            // Remove animation when responsive
            aboutSection.classList.remove("show", "hidden");
            return;
        }
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".contactform");

    function toggleAnimation() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If section is in view, add "show" class, else remove it
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            aboutSection.classList.add("show");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.remove("show");
            aboutSection.classList.add("hidden");
        }
    }

    window.addEventListener("scroll", toggleAnimation);
});

const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');
const sendButton = document.getElementById('send-button');

// Function to create a typing effect for bot response
async function typeText(element, text, speed = 50) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text[i];
        await new Promise(resolve => setTimeout(resolve, speed)); // Delay between letters
    }
}

// Function to handle sending a message
async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user message
    if (window.innerWidth <= 1000) {
        chatOutput.innerHTML += `<p style=" line-height: 1.5; font-size: 5vw; color:rgb(255, 255, 255);"><strong>You:</strong> ${userMessage}</p>`;
    }
    else
    {
        chatOutput.innerHTML += `<p style=" line-height: 1.5; color:rgb(255, 255, 255);"><strong>You:</strong> ${userMessage}</p>`;
    }
    chatInput.value = '';

    // Add loading animation (Typing effect)
    const loadingMessage = document.createElement('p');
    if (window.innerWidth <= 1000) {
        loadingMessage.innerHTML = `<p style="font-size: 5vw;"><strong >Bot:</strong> <span class="typing">Typing...</span></p>`;
    }
    else
    {
        loadingMessage.innerHTML = `<strong>Bot:</strong> <span class="typing">Typing...</span>`;
    }
    loadingMessage.style.lineHeight = "1.5";
    loadingMessage.style.color = "rgb(195, 168, 233)";
    chatOutput.appendChild(loadingMessage);

    // Scroll to the bottom
    chatOutput.scrollTop = chatOutput.scrollHeight;

    try {
        const response = await fetch('https://port-backend-46fw.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) throw new Error('Error in server response');

        const data = await response.json();
        const botMessage = data.response;

        // Remove the "Typing..." animation
        if (window.innerWidth <= 1000) {
            loadingMessage.innerHTML = `<p style="font-size: 5vw;"><strong >Bot:</strong> <span class="bot-response"></span></p>`;
        }
        else
        {
            loadingMessage.innerHTML = `<strong>Bot:</strong> <span class="bot-response"></span>`;
        }

        // Get the span element inside loadingMessage and animate the response
        const responseElement = loadingMessage.querySelector('.bot-response');
        await typeText(responseElement, botMessage);

    } catch (error) {
        if (window.innerWidth <= 1000) {
            loadingMessage.innerHTML = `<p style="font-size: 5vw;"><strong >Error communicating with server. Please try again later.</p>`;
        }
        else
        {
            loadingMessage.innerHTML = `<strong>Bot:</strong> Error communicating with server. Please try again later.`;
        }
        console.error(error);
    }

    // Scroll to bottom again after response
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Add event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        sendMessage();
    }
});


window.addEventListener("load", () => {
    gsap.fromTo(
        ".eye", 
        { y: 100, opacity: 0 },  // Start position (lower and invisible)
        { y: 0, opacity: 1, duration: 2, ease: "power2.out" } // Moves up smoothly
    );

    // After transition, start blinking animation
    setTimeout(startBlinking, 150);
});


