window.addEventListener('scroll', setScrolledHeader, { passive: true });
window.addEventListener('load', setScrolledHeader, { passive: true });

function setScrolledHeader() {
    const header = document.querySelector('.header-fixable');
    if (window.scrollY > 15) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
}

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.header-fixable');

function menuFunction() {
    mobileNav.classList.toggle('menu-open');
    console.log('Clicked');
}

menuButton.addEventListener('click', menuFunction);
