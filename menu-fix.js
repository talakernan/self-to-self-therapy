// Mobile menu functionality - hamburger button toggles between hamburger and X
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

    function toggleMobileMenu() {
        if (mobileMenuOverlay) {
            if (mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }
    }

    function openMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '×';
                mobileMenuBtn.style.fontSize = '1.8rem';
                mobileMenuBtn.style.color = '#3a2300';
            }
        }
    }

    function closeMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.fontSize = '1.5rem';
                mobileMenuBtn.style.color = '#3a2300';
            }
            // Show header logo again when mobile menu closes
            const headerLogo = document.querySelector('header .logo');
            if (headerLogo) {
                headerLogo.style.visibility = 'visible';
            }
        }
    }

    // Event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
});