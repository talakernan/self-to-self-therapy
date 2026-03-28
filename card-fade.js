(function () {
    var card = document.querySelector('.content-card');
    if (!card) return;

    var overlay = document.createElement('div');
    overlay.className = 'card-top-fade';
    document.body.appendChild(overlay);

    function update() {
        var rect = card.getBoundingClientRect();
        overlay.style.left = rect.left + 'px';
        overlay.style.width = rect.width + 'px';
        overlay.style.opacity = rect.top <= 0 ? '1' : '0';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
