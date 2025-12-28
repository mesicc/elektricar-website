window.addEventListener('scroll', function() {
    const navbar = document.getElementById('main-nav');
    
    // Ako skroluješ više od 50px, dodaj klasu "scrolled"
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});