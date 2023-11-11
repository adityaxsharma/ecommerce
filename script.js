var prevScrollPos = window.pageYOffset;
var menuBar = document.getElementById("menu-bar");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, add the scroll-up class
        menuBar.classList.remove("scroll-down");
        menuBar.classList.add("scroll-up");
    } else {
        // Scrolling down, add the scroll-down class
        menuBar.classList.remove("scroll-up");
        menuBar.classList.add("scroll-down");
    }

    prevScrollPos = currentScrollPos;
};
