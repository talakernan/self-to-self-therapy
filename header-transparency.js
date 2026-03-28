// Script to handle header transparency on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const card = document.querySelector('.content-card');

    if (!header || !card) return;

    // Background element sized to match the content card
    var headerBg = document.createElement('div');
    headerBg.style.cssText = 'position:absolute;top:0;bottom:0;background:linear-gradient(to bottom, rgba(199,232,216,0.95) 60%, transparent 100%);opacity:0;pointer-events:none;z-index:-1;';
    header.appendChild(headerBg);

    function update() {
        var cardRect = card.getBoundingClientRect();
        var show = cardRect.top <= 0;
        headerBg.style.left = cardRect.left + 'px';
        headerBg.style.width = cardRect.width + 'px';
        headerBg.style.transition = show ? 'opacity 0.3s ease' : 'none';
        headerBg.style.opacity = show ? '1' : '0';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
});
