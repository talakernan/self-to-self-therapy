// Script to handle header transparency on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const homepageContentRight = document.querySelector('.homepage-content-right');
    
    function handleHeaderScroll() {
        let scrollTop = 0;
        let shouldShowBackdrop = false;
        
        // Check if we're on desktop with scrollable right content
        if (homepageContentRight && window.innerWidth > 900) {
            // Desktop: get scroll from the right content area
            scrollTop = homepageContentRight.scrollTop;
            shouldShowBackdrop = scrollTop > 10;
        } else {
            // Mobile: get scroll from window/document
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Mobile: only show backdrop when content section is in view
            if (homepageContentRight) {
                const contentRect = homepageContentRight.getBoundingClientRect();
                const headerHeight = header.offsetHeight;
                
                // Show backdrop when content section reaches the header
                shouldShowBackdrop = contentRect.top <= headerHeight;
                
                // If content is visible, calculate scroll within content for opacity
                if (shouldShowBackdrop) {
                    const contentScrollStart = homepageContentRight.offsetTop - headerHeight;
                    const relativeScroll = Math.max(0, scrollTop - contentScrollStart);
                    scrollTop = relativeScroll;
                }
            } else {
                shouldShowBackdrop = scrollTop > 10;
            }
        }
        
        const maxScroll = 100; // Distance to scroll before header becomes fully opaque
        
        // Calculate opacity based on scroll position (0 to 0.95 max)
        let opacity = Math.min(scrollTop / maxScroll, 0.95);
        
        if (shouldShowBackdrop) {
            // Check if we're on desktop
            if (window.innerWidth > 900) {
                // Desktop: only apply background to right half
                header.style.background = `linear-gradient(to right, transparent 0%, transparent 50%, rgba(199, 232, 216, ${opacity}) 50%, rgba(199, 232, 216, ${opacity}) 100%)`;
                header.style.backdropFilter = 'none'; // Remove blur on desktop to keep left side clean
            } else {
                // Mobile: full background
                header.style.backgroundColor = `rgba(199, 232, 216, ${opacity})`;
                header.style.backdropFilter = 'blur(10px)';
            }
            header.classList.remove('transparent-header');
            header.classList.add('scrolled'); // Add class for fade effect
        } else {
            // Keep transparent at the top
            header.style.background = 'transparent';
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.classList.add('transparent-header');
            header.classList.remove('scrolled'); // Remove fade effect
        }
    }
    
    // Run on page load
    handleHeaderScroll();
    
    // Add scroll listener to window (for mobile)
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Add scroll listener to desktop content area (for desktop)
    if (homepageContentRight) {
        homepageContentRight.addEventListener('scroll', handleHeaderScroll);
    }
    
    // Also listen for window resize to switch between desktop/mobile behavior
    window.addEventListener('resize', handleHeaderScroll);
});
