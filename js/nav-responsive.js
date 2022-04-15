const primaryNav = document.querySelector('#navigation');
const menuBtn = document.querySelector('.menu-btn');
const li = document.querySelector('.li-1');
const li2 = document.querySelector('.li-2');
const li3 = document.querySelector('.li-3');
const li4 = document.querySelector('.li-4');
const li5 = document.querySelector('.li-5');

menuBtn.addEventListener('click', toggleMenu);
li.addEventListener('click', toggleMenu);
li2.addEventListener('click', toggleMenu);
li3.addEventListener('click', toggleMenu);
li4.addEventListener('click', toggleMenu);
li5.addEventListener('click', toggleMenu);


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