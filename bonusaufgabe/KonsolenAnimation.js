let position = 0;
const maxPosition = 15;

setInterval(() => {
    console.clear();

    // Create the water line
    let water = '';
    for (let i = 0; i < maxPosition; i++) {
        water += '~';
    }

    // Create the duck line with duck at position
    let duckLine = '';
    for (let i = 0; i < maxPosition; i++) {
        if (i === position) {
            duckLine += '🦆';
        } else {
            duckLine += ' ';
        }
    }

    // Print the animation
    console.log(duckLine);
    console.log(water);

    // Move duck to the right
    position++;

    // Reset when reaches end
    if (position >= maxPosition) {
        position = 0;
    }
}, 400); // Interval for swimming speed

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        console.log("Du hast die Katze gestreichelt! Schnurrr!");
    }
});