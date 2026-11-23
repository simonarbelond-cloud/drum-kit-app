
/* Finds the kick drum button and sound */
const kickButton = document.getElementById("kick-button");
const kickSound = document.getElementById("kick-sound");

/* Finds the ride drum button and sound */
const rideButton = document.getElementById("ride-button");
const rideSound = document.getElementById("ride-sound");

/* Finds the snare drum button and sound */
const snareButton = document.getElementById("snare-button");
const snareSound = document.getElementById("snare-sound");

/* Finds the tom drum button and sound */
const tomButton = document.getElementById("tom-button");
const tomSound = document.getElementById("tom-sound");

/* Finds the hi-hat button and sound */
const hihatButton = document.getElementById("hihat-button");
const hihatSound = document.getElementById("hihat-sound");


/* Creates a function to play the kick drum */
function playKick() {
    kickSound.currentTime = 0;
    kickSound.play().catch(error => {
        console.error("Could not play the kick sound:", error);
    });
}

/* Creates a function to play the ride drum */
function playRide() {
    rideSound.currentTime = 0;
    rideSound.play().catch(error => {
        console.error("Could not play the ride sound:", error);
    });
}

/* Creates a function to play the snare drum */
function playSnare() {
    snareSound.currentTime = 0;
    snareSound.play().catch(error => {
        console.error("Could not play the snare sound:", error);
    });
}

/* Creates a function to play the tom drum */
function playTom() {
    tomSound.currentTime = 0;
    tomSound.play().catch(error => {
        console.error("Could not play the tom sound:", error);
    });
}

/* Creates a function to play the hi-hat */
function playHihat() {
    hihatSound.currentTime = 0;
    hihatSound.play().catch(error => {
        console.error("Could not play the hi-hat sound:", error);
    });
}


/* Plays each drum sound when its button is clicked */
kickButton.addEventListener("click", playKick);
rideButton.addEventListener("click", playRide);
snareButton.addEventListener("click", playSnare);
tomButton.addEventListener("click", playTom);
hihatButton.addEventListener("click", playHihat);


/* Detects when the user presses a key on the keyboard */
document.addEventListener("keydown", function(event) {

    /* Plays kick when the A key is pressed */
    if (event.key.toLowerCase() === "a") {
        playKick();
    }

    /* Plays ride when the S key is pressed */
    if (event.key.toLowerCase() === "s") {
        playRide();
    }

    /* Plays snare when the D key is pressed */
    if (event.key.toLowerCase() === "d") {
        playSnare();
    }

    /* Plays tom when the F key is pressed */
    if (event.key.toLowerCase() === "f") {
        playTom();
    }

    /* Plays hi-hat when the G key is pressed */
    if (event.key.toLowerCase() === "g") {
        playHihat();
    }

});


