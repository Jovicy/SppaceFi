const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navigation__links')

menuBtn.addEventListener('click',()=> {
    navLinks.classList.toggle('mobile-menu')
})