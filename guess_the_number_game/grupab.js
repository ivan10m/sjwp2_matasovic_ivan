function randNumber() {
    return Math.floor(Math.random()*100)+1;
}

let randomNumber = randNumber();
let pokusaji = 0;

let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts = document.getElementById("attempts");

function updateAttempts() {
    attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event) {
    event.preventDefault();  //ne osvježava stranicu
    let value = parseInt(input.value);
    //console.log(value);
}

function newGame() {

}