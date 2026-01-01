// 1. Skrol efekat za Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobilni meni (otvaranje/zatvaranje i boja ikone)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    header.classList.toggle('menu-active'); // Za crnu boju ikone
    
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 3. Zatvori meni kada se klikne na link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        header.classList.remove('menu-active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});