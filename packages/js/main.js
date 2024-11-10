/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Activate / deactivate the theme manually with the button
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });
    }
});

// सभी सर्कुलर प्रोग्रेस बार्स को सेलेक्ट करें
const allProgressBars = document.querySelectorAll('.circular-progress');

const animateAllProgress = () => {
    allProgressBars.forEach(progress => {
        progress.style.setProperty('--progress', '0deg');
        const value = progress.querySelector('.progress-value').textContent;
        const percentage = parseInt(value);
        const degrees = (percentage / 100) * 360;
        
        setTimeout(() => {
            progress.style.setProperty('--progress', `${degrees}deg`);
        }, 100);
    });
}

// Intersection Observer का उपयोग
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateAllProgress();
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// सभी स्किल्स सेक्श्स को ऑब्सर्व करें
const skillsSections = document.querySelectorAll('.skills__circular-container, .skills__circular');
skillsSections.forEach(section => {
    if (section) {
        progressObserver.observe(section);
    }
});

// Enhanced Parallax Effect
document.addEventListener('DOMContentLoaded', () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateParallax = () => {
        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const yPos = -(lastScrollY * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add smooth scroll reveal effect
    const revealElements = document.querySelectorAll('.home__social, .home__img, .home__data');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        element.style.visibility = 'hidden';
        observer.observe(element);
    });

    // Add mouse movement parallax
    const container = document.querySelector('.parallax-container');
    
    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const xPos = x * 50 * speed;
            const yPos = y * 50 * speed;
            layer.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        });
    });
});

// Reform Digital Style Parallax Effect
document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const floatElements = document.querySelectorAll('.float-element');
    const contentElements = document.querySelectorAll('.home__social, .home__img, .home__data');
    
    let mouseX = 0;
    let mouseY = 0;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate floating elements
    function animateElements() {
        floatElements.forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            
            const x = (windowWidth - mouseX * 2) * speed;
            const y = (windowHeight - mouseY * 2) * speed;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        requestAnimationFrame(animateElements);
    }
    
    // Initialize animation
    animateElements();
    
    // Handle content animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Add sequential animation delay
                const delay = Array.from(contentElements).indexOf(entry.target) * 200;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        });
    }, observerOptions);
    
    contentElements.forEach(element => {
        contentObserver.observe(element);
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });
    
    // Optional: Add parallax on scroll
    let scrollPosition = 0;
    window.addEventListener('scroll', () => {
        scrollPosition = window.pageYOffset;
        
        floatElements.forEach((element, index) => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const yPos = scrollPosition * speed;
            element.style.transform += `translateY(${yPos}px)`;
        });
    });
    
    // Add smooth hover effect on content
    const homeContainer = document.querySelector('.home__container');
    if (homeContainer) {
        homeContainer.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = homeContainer.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 20;
            const y = ((e.clientY - top) / height - 0.5) * 20;
            
            homeContainer.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
        });
        
        homeContainer.addEventListener('mouseleave', () => {
            homeContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});

// Parallax Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll class to html
    document.documentElement.classList.add('smooth-scroll');

    // Get all sections
    const sections = document.querySelectorAll('section[data-speed]');
    let ticking = false;
    
    // Parallax function
    const parallaxScroll = () => {
        const scrolled = window.pageYOffset;
        
        sections.forEach(section => {
            const speed = section.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            
            // Apply transform
            section.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    };

    // Scroll event listener with requestAnimationFrame
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.home__content, .about__content, .skills__content');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Performance optimization for mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );

    if (isMobile) {
        sections.forEach(section => {
            section.style.transform = 'none';
        });
    }

    // Optional: Smooth scroll to anchor links
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

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth <= 768) {
                sections.forEach(section => {
                    section.style.transform = 'none';
                });
            } else {
                parallaxScroll();
            }
        }, 250);
    });
});

const certificates = {
    'google-cyber': 'packages\images\google_cybersecurity_certificate.png' 
};

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("9miPJj3ucgEnGQkA-");

    // Update these variables with your actual IDs
    const serviceID = 'service_e6nq9sm';
    const templateID = 'template_g1wl61h';

    // Contact Form Event Listener
    const contactForm = document.getElementById('contact-form');
    const sendBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.textContent = 'Sending...';
        
        // Prepare template parameters
        const templateParams = {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        };

        // Send email
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                // Success
                btn.textContent = 'Sent Successfully!';
                this.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            })
            .catch((err) => {
                // Error
                btn.textContent = 'Failed to Send';
                console.log('EmailJS Error:', err);
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            });
    });
})();

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add loading spinner
const loadingSpinner = `
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
`;

// Add form validation
function validateForm() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add this to your existing scroll animation code
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

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initial check
handleScrollAnimation(); 