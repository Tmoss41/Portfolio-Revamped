function menu() {
    const nav = document.getElementById('navbar')
    const bars = document.getElementById('bars')
    if (nav.style.display == 'none') {
        bars.style.filter = 'brightness(0) invert(1)'
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
        bars.style.filter = 'brightness(1) invert(0)'
    }
}
