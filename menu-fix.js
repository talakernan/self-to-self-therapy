// Hide hamburger when mobile menu is open, show when closed
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('mobileMenuBtn');
    var overlay = document.getElementById('mobileMenuOverlay');
    if (!btn || !overlay) return;

    var observer = new MutationObserver(function () {
        btn.style.visibility = overlay.classList.contains('active') ? 'hidden' : 'visible';
    });
    observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });
});
