const button = document.getElementById('shyButton');
const playground = document.querySelector('.playground');
let currentX = 0;
let currentY = 0;
let isEscaping = false;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getRandomOffset = (max) => (Math.random() * 2 - 1) * max;

const updateButtonTransform = (scaleX = 1, scaleY = 1) => {
    button.style.transform = `translate(${currentX}px, ${currentY}px) scaleX(${scaleX}) scaleY(${scaleY})`;
};

const escapeButton = () => {
    if (isEscaping) return;
    isEscaping = true;

    const area = playground.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const maxX = (area.width - buttonRect.width) / 2 - 20;
    const maxY = (area.height - buttonRect.height) / 2 - 20;

    currentX = clamp(currentX + getRandomOffset(180), -maxX, maxX);
    currentY = clamp(currentY + getRandomOffset(120), -maxY, maxY);

    updateButtonTransform(0.9, 1.08);

    window.setTimeout(() => {
        updateButtonTransform(1, 1);
        isEscaping = false;
    }, 280);
};

const handleProximity = (event) => {
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const dx = event.clientX - buttonCenterX;
    const dy = event.clientY - buttonCenterY;
    const distance = Math.hypot(dx, dy);

    if (distance < 120) {
        escapeButton();
    }
};

playground.addEventListener('mousemove', handleProximity);
button.addEventListener('mouseenter', escapeButton);
button.addEventListener('click', (event) => {
    event.preventDefault();
    button.textContent = 'Zu schnell! Versuch es noch einmal...';
});