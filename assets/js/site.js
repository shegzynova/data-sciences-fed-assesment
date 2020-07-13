const navToggler = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

const toggleNav = () => {
    navToggler.classList.toggle('active');
    navMenu.classList.toggle('d-none');
}

new SlimSelect({
    select: '#subscribe-select'
})

ScrollReveal().reveal('.reveal', { delay: 300 });

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', toggleNav)
})

navToggler.addEventListener('click', toggleNav);

