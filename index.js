function toggleMenu() {

    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const checkbox = document.getElementById('darkmode-toggle');
const logo = document.querySelector('.logo');

checkbox.addEventListener('click',() => {
    logo.classList.toggle('dark');
})