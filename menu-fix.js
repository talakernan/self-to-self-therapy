// Mobile menu fix to ensure logo stays visible
document.addEventListener('DOMContentLoaded', function() {
    // Move the mobile menu overlay before the header in the DOM
    // This will ensure proper stacking context
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const header = document.querySelector('header');
    
    if (mobileMenuOverlay && header) {
        // Get the parent element
        const parent = header.parentNode;
        
        // Insert the mobile menu overlay before the header
        parent.insertBefore(mobileMenuOverlay, header);
        
        // Add a copy of the logo to the mobile menu overlay
        const logo = document.querySelector('.logo');
        if (logo) {
            // Create a container for the logo in the mobile menu that matches the nav styling
            const mobileNavContainer = document.createElement('div');
            mobileNavContainer.className = 'mobile-menu-header';
            mobileNavContainer.style.display = 'flex';
            mobileNavContainer.style.justifyContent = 'space-between';
            mobileNavContainer.style.width = '100%';
            mobileNavContainer.style.padding = '2rem';
            mobileNavContainer.style.position = 'absolute';
            mobileNavContainer.style.top = '0';
            
            // Clone the logo and add it to the mobile menu
            const logoClone = logo.cloneNode(true);
            logoClone.className = 'logo mobile-logo';
            
            mobileNavContainer.appendChild(logoClone);
            
            // Move the close button to the container to position it properly
            const closeButton = mobileMenuOverlay.querySelector('.mobile-menu-close');
            if (closeButton) {
                // Remove the old styles that position it absolutely
                closeButton.style.position = 'relative';
                closeButton.style.top = 'auto';
                closeButton.style.right = 'auto';
                mobileNavContainer.appendChild(closeButton);
            }
            
            // Insert the container at the top of the mobile menu
            mobileMenuOverlay.insertBefore(mobileNavContainer, mobileMenuOverlay.firstChild);
        }
    }
});
