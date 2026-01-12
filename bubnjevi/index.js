/* document.querySelector("button").addEventListener("click", function () {
    alert("Kliknuo si");
}); */

for (let i = 0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /* console.log(this.innerHTML); */
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

