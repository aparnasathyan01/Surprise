const menuIcon = document.querySelector('.hamburger-menu');
const hambar = document.querySelector('.ham-bar');
menuIcon.addEventListener('click', ()=> {
    hambar.classList.toggle("change");
});