function menu() {
    const nav = document.getElementById('navbar')
    const bars = document.getElementById('bars')
    if (nav.style.display == 'none') {
        bars.style.filter = 'brightness(0) invert(1)';
        bars.style.transform = 'rotate(90deg)';
        bars.style.transition = 'transform 200ms';
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
        bars.style.filter = 'brightness(1) invert(0)';
        bars.style.transform = 'rotate(0deg)';
        bars.style.transition = 'transform 200ms';
    }
}
