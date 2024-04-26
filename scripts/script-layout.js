function clickMenu() {
    var iconeB = window.document.querySelector("i#burgerMenu");
    var iconeX = window.document.querySelector("i#closeMenu");

    if (menuOpen.style.display == "block") {
        menuOpen.style.display = "none";
        iconeX.style.display = "none"
        iconeB.style.display = "block"
    } else {
        menuOpen.style.display = "block";
        iconeB.style.display = "none"
        iconeX.style.display = "block"
    }
}

function showMenu() {
    if (window.innerWidth >= 700) {
        menuOpen.style.display = "block";
    } else {
        menuOpen.style.display = "none";
    }
}