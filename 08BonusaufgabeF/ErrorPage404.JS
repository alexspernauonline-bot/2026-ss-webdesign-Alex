let lastScrollTop = 0;
const navbar = document.querySelector('.navbar'); // Passe den Selektor an deine Navbar an

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Runterscrollen -> Navbar verstecken
        navbar.classList.add('navbar--hidden');
    } else {
        // Hochscrollen -> Navbar zeigen
        navbar.classList.remove('navbar--hidden');
    }
    
    // Verhindert negative Werte beim Scrollen am Mac (Bounce-Effekt)
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});