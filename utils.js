/*
 * Beat class that keeps track of playing the audio
 */

class Beat {
    constructor(audioSrc){
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

/*
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.createTransitionEndListener();
    }


    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    createTransitionEndListener = () => {
        this.element.addEventListener('transitionend', ()=>{
            this.deselect();
        })
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "rgba(221, 13, 17, 0.9)";
        this.element.style.boxShadow = `none`;
    }
}

class Character {
    constructor(image){
        this.url = image;
    }


    /**
     * Set the image based on character specified
     */
    setCharacterImage = () => {
        document.getElementById("character").style.backgroundImage='url("' + this.url + '")';
    }

}