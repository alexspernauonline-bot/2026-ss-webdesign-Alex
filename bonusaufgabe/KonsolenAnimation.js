let position = 0;
const maxPosition = 20; // Width of the animation area

setInterval(() => {
    console.clear();

    // Create the water line with duck on it
    let waterLine = '';
    for (let i = 0; i < maxPosition; i++) {
        if (i === position) {
            waterLine += '🦆';
        } else {
            waterLine += '~';
        }
    }
    let waterSurface = " ";
    for (let i = 0; i < maxPosition; i++) {
        if(i === position) {
            waterSurface += "~ "; // Wave emoji
        }
        else {
            waterSurface += "~";
        }
    }

    // Print the animation
    console.log(waterLine);
    console.log(waterSurface);

    // Move duck to the right
    position++;

    // Reset when reaches end
    if (position >= maxPosition) {
        position = 0;
    }
}, 400); // Interval for swimming speed

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        console.log("Happy Quack!");
    }
});