const primaryNav = document.querySelector('#navigation');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu (e) {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        menuBtn.setAttribute("aria-expanded", true);
    }
    else {
        primaryNav.setAttribute("data-visible", false);
        menuBtn.setAttribute("aria-expanded", false);
    }

}