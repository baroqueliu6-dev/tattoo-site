// Main JavaScript for Chinese Character Tattoo Shop

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Initialize PayPal buttons when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Chinese Character Tattoo Shop loaded');
    
    // PayPal buttons are initialized by the SDK automatically
    // based on the hosted button IDs in the HTML
    
    // Add loading state to buttons
    const buttonContainers = document.querySelectorAll('.paypal-button-container');
    buttonContainers.forEach(container => {
        // Add a subtle loading indicator
        container.style.opacity = '0.8';
    });
    
    // Track page views (optional analytics)
    console.log('📊 Gallery section:', document.querySelectorAll('.product-card').length, 'products');
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.querySelectorAll('.product-card, .feature, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Console message for developers
console.log('%c🎨 Chinese Character Tattoo Designs', 'font-size: 20px; font-weight: bold; color: #e94560;');
console.log('%cBuilt with ❤️ for authentic cultural expression', 'font-size: 12px; color: #666;');
