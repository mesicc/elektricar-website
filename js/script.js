window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Ako se skrola više od 50px od vrha
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Opcionalno: Hamburger menu funkcionalnost
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Ovdje možeš dodati logiku za otvaranje mobilnog menija
    alert('Meni otvoren!'); 
});