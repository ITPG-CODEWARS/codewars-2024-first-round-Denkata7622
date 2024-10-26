window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade_in_section');
    const screenHeight = window.innerHeight;
    const cooldown = 50; // Cooldown of 50ms

    sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect();
        const currentTime = Date.now();
        const lastFade = section.dataset.lastFade ? parseInt(section.dataset.lastFade) : 0;

        // Check if the cooldown period has passed
        if (currentTime - lastFade < cooldown) {
            return; // Exit if cooldown period hasn't passed
        }

        // Fade in when the section is at least partially visible
        if (sectionPosition.top < screenHeight - 150 && sectionPosition.bottom > 10) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
            section.dataset.lastFade = currentTime;
        }

        // Fade out when the section is out of the viewport
        if (sectionPosition.bottom < 10) {
            section.classList.remove('visible');
            section.dataset.lastFade = currentTime; 
        }
    });
});
