// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show success message (você pode integrar com um serviço de email depois)
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
    contactForm.reset();
    
    // Aqui você pode adicionar integração com serviços como:
    // - EmailJS
    // - Formspree
    // - Netlify Forms
    // - Seu próprio backend
});

// Typing effect for hero subtitle
const subtitle = document.querySelector('.hero-subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Cursor trail effect (optional - pode remover se não gostar)
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

// Create cursor trail circles
for (let i = 0; i < 20; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.3);
        pointer-events: none;
        z-index: 9999;
        transition: 0.1s;
    `;
    document.body.appendChild(circle);
}

const circleElements = document.querySelectorAll('.circle');

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circleElements.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.transform = `scale(${(circleElements.length - index) / circleElements.length})`;
        
        const nextCircle = circleElements[index + 1] || circleElements[0];
        x += (nextCircle.offsetLeft - x) * 0.3;
        y += (nextCircle.offsetTop - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();

// ===== Internationalization (i18n) =====
let currentLang = 'pt'; // Default language

// Get browser language
function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('pt') ? 'pt' : 'en';
}

// Load saved language or use browser language
function loadLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        currentLang = getBrowserLanguage();
        localStorage.setItem('preferredLanguage', currentLang);
    }
    updateLanguageDisplay();
    translatePage();
}

// Update language button display
function updateLanguageDisplay() {
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) {
        langDisplay.textContent = currentLang.toUpperCase();
    }
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

// Translate entire page
function translatePage() {
    const t = translations[currentLang];
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const navKeys = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
        if (navKeys[index]) {
            link.textContent = t.nav[navKeys[index]];
        }
    });
    
    // Hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `${t.hero.greeting} <span class="highlight">${t.hero.name}</span>`;
    }
    
    const heroSubtitle = document.querySelector('.typing-text');
    if (heroSubtitle) {
        heroSubtitle.setAttribute('data-text', t.hero.subtitle);
        // Restart typing animation
        typeEffect();
    }
    
    const heroBtns = document.querySelectorAll('.btn-primary');
    if (heroBtns[0]) heroBtns[0].textContent = t.hero.cta1;
    if (heroBtns[1]) heroBtns[1].textContent = t.hero.cta2;
    
    // About section
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    
    const aboutDesc = document.querySelector('#about .about-text p');
    if (aboutDesc) aboutDesc.textContent = t.about.description;
    
    const stats = document.querySelectorAll('.stat');
    if (stats.length >= 3) {
        stats[0].querySelector('h3').textContent = t.about.stat1Value;
        stats[0].querySelector('p').textContent = t.about.stat1Label;
        stats[1].querySelector('h3').textContent = t.about.stat2Value;
        stats[1].querySelector('p').textContent = t.about.stat2Label;
        stats[2].querySelector('h3').textContent = t.about.stat3Value;
        stats[2].querySelector('p').textContent = t.about.stat3Label;
    }
    
    // Experience section
    const expTitle = document.querySelector('#experience h2');
    if (expTitle) expTitle.textContent = t.experience.title;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (t.experience.jobs[index]) {
            const job = t.experience.jobs[index];
            item.querySelector('h3').textContent = job.title;
            item.querySelector('h4').textContent = job.company;
            item.querySelector('.timeline-date').textContent = job.date;
            
            const listItems = item.querySelectorAll('li');
            listItems.forEach((li, i) => {
                if (job.items[i]) {
                    li.textContent = job.items[i];
                }
            });
        }
    });
    
    // Education section
    const eduTitle = document.querySelector('#education h2');
    if (eduTitle) eduTitle.textContent = t.education.title;
    
    const eduCards = document.querySelectorAll('.education-card');
    eduCards.forEach((card, index) => {
        if (t.education.degrees[index]) {
            const degree = t.education.degrees[index];
            card.querySelector('h3').textContent = degree.degree;
            card.querySelector('h4').textContent = degree.institution;
            card.querySelector('.education-date').textContent = degree.date;
            card.querySelector('p').textContent = degree.description;
        }
    });
    
    // Skills section
    const skillsTitle = document.querySelector('#skills h2');
    if (skillsTitle) skillsTitle.textContent = t.skills.title;
    
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        if (t.skills.categories[index]) {
            const category = t.skills.categories[index];
            card.querySelector('h3').textContent = category.title;
            
            const skillItems = card.querySelectorAll('.skill-item');
            skillItems.forEach((item, i) => {
                if (category.items[i]) {
                    item.textContent = category.items[i];
                }
            });
        }
    });
    
    // Projects section
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) projectsTitle.textContent = t.projects.title;
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const infoDiv = card.querySelector('.project-info');
        if (infoDiv && index < 3) { // Only translate the first 3 projects (real ones)
            const project = t.projects.items[index];
            if (project) {
                infoDiv.querySelector('h3').textContent = project.title;
                infoDiv.querySelector('p').textContent = project.description;
                
                const tags = infoDiv.querySelectorAll('.project-tags span');
                tags.forEach((tag, i) => {
                    if (project.tags[i]) {
                        tag.textContent = project.tags[i];
                    }
                });
            }
        }
        
        // Update button texts for all projects
        const links = card.querySelectorAll('.project-link');
        if (links.length >= 2) {
            links[0].setAttribute('title', index < 3 ? t.projects.viewDemo : t.projects.comingSoon);
            links[1].setAttribute('title', index < 3 ? t.projects.viewCode : t.projects.comingSoon);
        }
    });
    
    // Contact section
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = t.contact.title;
    
    const contactSubtitle = document.querySelector('#contact .section-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = t.contact.subtitle;
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    if (formInputs[0]) formInputs[0].placeholder = t.contact.namePlaceholder;
    if (formInputs[1]) formInputs[1].placeholder = t.contact.emailPlaceholder;
    if (formInputs[2]) formInputs[2].placeholder = t.contact.messagePlaceholder;
    
    const sendBtn = document.querySelector('.btn-primary[type="submit"]');
    if (sendBtn) sendBtn.textContent = t.contact.sendButton;
    
    const locationP = document.querySelector('.contact-item p');
    if (locationP && locationP.textContent.includes('Divinópolis') || locationP.textContent.includes('Brazil')) {
        locationP.textContent = t.contact.location;
    }
    
    // Footer
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; 2026 Wescley Dimas. ${t.footer.rights}`;
    }
}

// Language toggle button
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('preferredLanguage', currentLang);
        updateLanguageDisplay();
        translatePage();
    });
}

// Initialize language on page load
loadLanguage();

console.log('🚀 Portfólio carregado com sucesso!');
console.log('💡 Desenvolvido com ❤️');
