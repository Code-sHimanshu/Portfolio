// सर्कुलर प्रोग्रेस बार एनीमेशन
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

// Intersection Observer का उपयोग करें ताकि स्क्रॉल करने पर एनीमेशन शुरू हो
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// स्किल्स सेक्शन को ऑब्जर्व करें
const skillsSection = document.querySelector('.skills__circular');
if (skillsSection) {
    observer.observe(skillsSection);
} 