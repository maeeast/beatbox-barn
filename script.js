
let beats = {
    "65": {
        beat: new Beat("./sounds/tractor.mp3"),
        button: new Button("#AE5F41", 65),
        character: new Character("./images/tractor.png")  
    },
    "83": {
        beat: new Beat("./sounds/sheep.mp3"),
        button: new Button("#AE5F41", 83),
        character: new Character("./images/sheep.png")  
    },
    "68": {
        beat: new Beat("./sounds/cat.mp3"),
        button: new Button("#AE5F41", 68),
        character: new Character("./images/cat.png")  
    },
    "70": {
        beat: new Beat("./sounds/horse.mp3"),
        button: new Button("#AE5F41", 70),
        character: new Character("./images/horse.png")  
    },
    "71": {
        beat: new Beat("./sounds/chicken.mp3"),
        button: new Button("#AE5F41", 71),
        character: new Character("./images/chicken.png")  
    },
    "72": {
        beat: new Beat("./sounds/goat.mp3"),
        button: new Button("#AE5F41", 72),
        character: new Character("./images/goat.png")  
    },
    "74": {
        beat: new Beat("./sounds/cow.mp3"),
        button: new Button("#AE5F41", 74),
        character: new Character("./images/cow.png")  
    },
    "75": {
        beat: new Beat("./sounds/dog.mp3"),
        button: new Button("#AE5F41", 75),
        character: new Character("./images/dog.png")  
    },
    "76": {
        beat: new Beat("./sounds/pig.mp3"),
        button: new Button("#AE5F41", 76),
        character: new Character("./images/pig.png")  
    }
}

/* Function to play the beat upon a press of key  */

triggerBeat = (event) => {
    var code = event.keyCode;
    console.log(code);
    if(code in beats){
        beats[code].beat.play();
        beats[code].button.select();
        beats[code].character.setCharacterImage();
    }
}

/* Keydown listener to fire triggerBeat function */

document.addEventListener('keydown', triggerBeat);
