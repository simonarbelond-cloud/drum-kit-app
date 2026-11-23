
// Finds the kick drum button
const kickButton = document.getElementById("kick-button");

// Finds the ride drum button
const rideButton = document.getElementById("ride-button");

// Finds the kick drum audio element
const kickSound = document.getElementById("kick-sound");

// Finds the ride drum audio element
const rideSound = document.getElementById("ride-sound");

// Creates a function to play the kick drum
function playKick() {

    // Restarts the kick sound from the beginning
    kickSound.currentTime = 0;

    // Plays the kick drum sound
    kickSound.play().catch(function(error) {

        // Displays an error if the kick sound cannot play
        console.error("Could not play the kick sound:", error);

    });
}

// Creates a function to play the ride drum
function playRide() {

    // Restarts the ride sound from the beginning
    rideSound.currentTime = 0;

    // Plays the ride drum sound
    rideSound.play().catch(function(error) {

        // Displays an error if the ride sound cannot play
        console.error("Could not play the ride sound:", error);

    });
}

// Plays the kick sound when the KICK button is clicked
kickButton.addEventListener("click", playKick);

// Plays the ride sound when the RIDE button is clicked
rideButton.addEventListener("click", playRide);

// Detects when the user presses a key on the keyboard
document.addEventListener("keydown", function(event) {

    // Checks if the user pressed the A key
    if (event.key.toLowerCase() === "a") {

        // Plays the kick drum
        playKick();
    }

    // Checks if the user pressed the S key
    if (event.key.toLowerCase() === "s") {

        // Plays the ride drum
        playRide();
    }

});


