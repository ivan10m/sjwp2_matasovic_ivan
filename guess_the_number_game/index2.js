function randNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }
let randomNumber = randNumber();
let pokusaji = 0;

let input =document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts = document.getElementById("attempts");

function updateAttempts() {
    attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event){
    event.preventDefault();
    let value = parseInt(input.value);
    
    if (isNaN(value) || value < 1 || value > 100) {
        msg.innerHTML = "Unesi broj između 1 i 100";
        msg.style.color = "crimson";
        return;
    }
    pokusaji++;
    updateAttempts();

    if (value === randomNumber) {
        msg.innerHTML = "Pogodak. Broj je: " + randomNumber;
        msg.style.color = "green";
    } else if(value < randomNumber){
        msg.textContent = 'Premalo!';
        msg.style.color = 'orange';
    } else {
        msg.textContent = 'Preveliko!';
        msg.style.color = 'orange';
    }
}

function newGame() {
    randomNumber = randNumber();
    pokusaji = 0;
    input.value = "";
    msg.innerHTML = "Nova igra";
    msg.style.color = "black";
    updateAttempts();
    input.focus();
}
