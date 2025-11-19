const burgerMenu = document.getElementById('burgerMenu');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const headerNav = document.getElementById('headerNav');

if (burgerMenu && openIcon && closeIcon && headerNav) {
    burgerMenu.addEventListener('click', () => {
        openIcon.classList.toggle('d-none');
        closeIcon.classList.toggle('d-none');
        headerNav.classList.toggle('header-nav__open');  
        if (headerNav.classList.contains('header-nav__open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1200) {
                openIcon.classList.remove('d-none');
                closeIcon.classList.add('d-none');
                headerNav.classList.remove('header-nav__open');
                document.body.style.overflow = 'auto';
            }
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});