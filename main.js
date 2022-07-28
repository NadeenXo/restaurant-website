let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.mynavbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}