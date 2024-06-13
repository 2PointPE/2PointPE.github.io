function updateHeaderOnScroll() {
    var header = document.querySelector("header");
    if (header) {
        if (window.matchMedia("(max-width: 767px)").matches) {
            header.classList.toggle("sticky", window.scrollY > 80);
        } else {
            header.classList.toggle("sticky", window.scrollY > 150);
        }
    }
}

window.addEventListener("scroll", updateHeaderOnScroll);

updateHeaderOnScroll();

document.addEventListener("DOMContentLoaded", function() {
    var menuMobile = document.querySelector(".menuMobile");
    var fond = document.querySelector(".fond");

    if (menuMobile) {
        menuMobile.addEventListener("click", function() {
            if (menuMobile.classList.contains("activeMenu")) {
                menuMobile.classList.remove("activeMenu");
                menuMobile.classList.add("closeMenu");
            } else if (menuMobile.classList.contains("closeMenu")) {
                menuMobile.classList.remove("closeMenu");
                menuMobile.classList.add("activeMenu");
            } else {
                menuMobile.classList.add("activeMenu");
            }

            if (fond.classList.contains("activeFond")) {
                fond.classList.remove("activeFond");
                fond.classList.add("closeFond");
            } else if (fond.classList.contains("closeFond")) {
                fond.classList.remove("closeFond");
                fond.classList.add("activeFond");
            } else {
                fond.classList.add("activeFond");
            }
        });
    }
});