// Animation.js - Handles element animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in');
    
    // Animate elements in succession with delays
    animateElementsInSequence();
    
    function animateElementsInSequence() {
        animatedElements.forEach((element, index) => {
            // Add animation with staggered delay (200ms between each element)
            setTimeout(() => {
                element.classList.add('animate');
            }, index * 200); // Adjust timing here (200ms = 0.2 seconds between elements)
        });
    }
});