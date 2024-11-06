document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    let ticking = false;
    
    const getScrollPosition = () => {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    const updateParallax = (scrollPos) => {
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax');
            const yPos = -(scrollPos * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    window.addEventListener('scroll', () => {
        const scrollPos = getScrollPosition();
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax(scrollPos);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mouse move parallax effect
    const container = document.querySelector('.projects.section');
    container.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax');
            element.style.transform = `translate3d(${xPos * speed}px, ${yPos * speed}px, 0)`;
        });
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 