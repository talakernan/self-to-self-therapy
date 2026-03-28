(function () {
    var card = document.querySelector('.content-card');
    if (!card) return;

    var overlay = document.createElement('div');
    overlay.className = 'card-top-fade';
    document.body.appendChild(overlay);

    function update() {
        var rect = card.getBoundingClientRect();
        var show = rect.top <= 0;
        overlay.style.left = rect.left + 'px';
        overlay.style.width = rect.width + 'px';
        overlay.style.transition = show ? 'opacity 0.3s ease' : 'none';
        overlay.style.opacity = show ? '1' : '0';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
