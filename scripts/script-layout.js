function clickMenu() {
    if (menuOpen.style.display == 'block') {
        menuOpen.style.display = 'none'
    } else {
        menuOpen.style.display = 'block';
    }
}

function showMenu() {
    if (window.innerWidth >= 700) {
        menuOpen.style.display = 'block'
    } else {
        menuOpen.style.display = 'none'
    }
}