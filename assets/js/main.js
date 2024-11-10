// Circular Progress Bar Animation
const progressBars = document.querySelectorAll('.circular-progress');

function animateProgress() {
    progressBars.forEach(progress => {
        progress.style.setProperty('--progress', '0deg');
        const value = progress.querySelector('.progress-value').textContent;
        const percentage = parseInt(value);
        const degrees = (percentage / 100) * 360;
        
        setTimeout(() => {
            progress.style.setProperty('--progress', `${degrees}deg`);
        }, 100);
    });
}

// Use Intersection Observer to start animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the skills section
const skillsSection = document.querySelector('.skills__circular');
if (skillsSection) {
    observer.observe(skillsSection);
} 

 