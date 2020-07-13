const navToggler = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

const toggleNav = () => {
    navToggler.classList.toggle('active');
    navMenu.classList.toggle('d-none');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', toggleNav)
})

navToggler.addEventListener('click', toggleNav)

