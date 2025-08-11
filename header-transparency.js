// Script to ensure header transparency
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // Make sure header is always transparent
    function ensureHeaderTransparency() {
        header.classList.add('transparent-header');
    }
    
    // Run on page load
    ensureHeaderTransparency();
    
    // Also run on scroll to ensure it stays transparent
    window.addEventListener('scroll', ensureHeaderTransparency);
});
