// Animation.js - Handles element animations on scroll

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in');
    
    // Initial check for elements in viewport on page load
    checkElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', throttle(checkElements, 100));
    
    // Function to check if elements are in viewport
    function checkElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }
    
    // Helper function to determine if an element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 && 
            rect.bottom >= 0
        );
    }
    
    // Throttle function to limit how often the scroll event fires
    function throttle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return fn(...args);
        };
    }
});
