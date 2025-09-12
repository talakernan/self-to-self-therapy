// Mobile fade effect for content under header
(function() {
    'use strict';
    
    function initMobileFade() {
        if (window.innerWidth > 600) return; // Only on mobile
        
        const homepageContentRight = document.querySelector('.homepage-content-right');
        const homepageHeroLeft = document.querySelector('.homepage-hero-left');
        
        if (!homepageContentRight || !homepageHeroLeft) return;
        
        function handleScroll() {
            const heroHeight = homepageHeroLeft.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Show fade when user scrolls past the hero image
            if (scrollTop > heroHeight * 0.8) {
                homepageContentRight.classList.add('show-fade');
            } else {
                homepageContentRight.classList.remove('show-fade');
            }
        }
        
        // Initial check
        handleScroll();
        
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Re-initialize on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 600) {
                homepageContentRight.classList.remove('show-fade');
                window.removeEventListener('scroll', handleScroll);
            } else {
                handleScroll();
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileFade);
    } else {
        initMobileFade();
    }
})();
