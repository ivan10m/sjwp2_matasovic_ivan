function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}

let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts = document.getElementById("attempts");

let randNumber = randomNumber();
let pokusaji = 0;

function updateAttemps() {
    attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttemps();

function checkNumber(event) {
    event.preventDefault();  //ne osvježava stranicu
    let value = parseInt(input.value);
    console.log(value);
}

function NewGame() {

}