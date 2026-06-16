
let lastScrollTop = 0;
// Hole das Navbar-Element. Passe den Klassennamen an deinen Code an!
const navbar = document.querySelector('.navbar'); 

window.addEventListener('scroll', () => {
    // Aktuelle Scrollposition abfragen
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Wenn weiter nach unten gescrollt wird als vorher UND man nicht ganz oben ist
    if (scrollTop > lastScrollTop && scrollTop > 70) {
        // Runterscrollen -> Klasse hinzufügen (Navbar verstecken)
        navbar.classList.add('navbar--hidden');
    } else {
        // Hochscrollen -> Klasse entfernen (Navbar zeigen)
        navbar.classList.remove('navbar--hidden');
    }
    
    // Aktuelle Position für den nächsten Vergleich speichern
    // Der Extra-Check verhindert negative Werte beim "Bounce-Effekt" (z.B. am Mac/iOS)
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, { passive: true }); // passive erhöht die Scroll-Performance

const buttons = Array.from(document.querySelectorAll('.buttonCall'));
const correctIndex = Math.floor(Math.random() * buttons.length);
const realLink = '../index.html';

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === correctIndex) {
            window.location.href = realLink;
        } else {
            button.textContent = 'Hoppla, falsch! Versuch es nochmal...';
            button.style.backgroundColor = '#ff5c5c';
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        }
    });
});