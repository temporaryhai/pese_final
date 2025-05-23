

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".horizontal-scroll");
let sections = gsap.utils.toArray(".h-section");
let progressBar = document.querySelector(".progress-bar");
let checkpoints = document.querySelectorAll(".checkpoint");

// Horizontal Scroll Animation
gsap.to(container, {
    x: () => `-${(sections.length - 1) * 40}vw`, // Moves sections horizontally
    ease: "none",
    scrollTrigger: {
        trigger: "#projects",
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
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