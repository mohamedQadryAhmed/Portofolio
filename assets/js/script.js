const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu-links');

hamburgerIcon.addEventListener('click', ()=>{
    hamburgerIcon.classList.toggle('open');
    menu.classList.toggle('open');
});