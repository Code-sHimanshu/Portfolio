// Activities data
const activities = [
    {
        icon: 'uil-users-alt',
        title: 'Coordinator, Xpressions',
        subtitle: 'University Youth Fest, SHUATS-2023',
        description: 'Coordinated and managed events during the university youth festival.',
        date: '2023'
    },
    {
        icon: 'uil-calendar-alt',
        title: 'Coordinator, Kritagyata Mahotsav',
        subtitle: 'University Fest, SHUATS-2024',
        description: 'Led and organized events for the university festival.',
        date: '2024'
    },
    {
        icon: 'uil-book-open',
        title: 'Research Methodology Workshop Coordinator',
        subtitle: 'SHUATS-2024',
        description: 'Coordinated National Workshop on Research Methodology.',
        date: '2024'
    },
    {
        icon: 'uil-restaurant',
        title: 'Food Fest Coordinator',
        subtitle: 'World Food Day, SHUATS-2024',
        description: 'Organized and managed the World Food Day celebrations.',
        date: '2024'
    },
    {
        icon: 'uil-presentation-play',
        title: 'Project Exhibition Coordinator',
        subtitle: 'SHUATS-2023',
        description: 'Coordinated project exhibition and won second place.',
        date: '2023'
    },
    
    {
        icon: 'uil-google',
        title: 'Google Devfest Coordinator',
        subtitle: 'Prayagraj-2023',
        description: 'Coordinated Google Devfest events and activities.',
        date: '2023'
    },

    {
        icon: 'uil-award',
        title: 'Quiz Competition Runner-up',
        subtitle: 'National Librarian Day, SHUATS-2024',
        description: 'Secured 2nd position in the Quiz Competition.',
        date: '2024'
    },
   
];

// Function to create activity cards
function createActivityCards() {
    const container = document.querySelector('.activities__container');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    activities.forEach(activity => {
        const activityHTML = `
            <div class="activity__content" data-animation="fade-up">
                <div class="activity__header">
                    <i class="uil ${activity.icon} activity__icon"></i>
                    <div>
                        <h3 class="activity__title">${activity.title}</h3>
                        <span class="activity__subtitle">${activity.subtitle}</span>
                    </div>
                </div>
                <div class="activity__body">
                    <p class="activity__description">${activity.description}</p>
                    <div class="activity__date">
                        <i class="uil uil-calendar-alt"></i>
                        ${activity.date}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += activityHTML;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createActivityCards();
    
    // Animation
    const scrollElements = document.querySelectorAll('[data-animation]');
    
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('animate-in');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 0.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
}); 