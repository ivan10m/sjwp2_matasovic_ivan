function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}

let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts = document.getElementById("attempts");

let randNumber = randomNumber();
console.log(randNumber);
let pokusaji = 0;

function updateAttemps() {
    attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttemps();

function checkNumber(event) {
    event.preventDefault();  //ne osvježava stranicu
    let value = parseInt(input.value);
    /*console.log(value);*/

    if(isNaN(value) || value<1 || value>100)
    {
        msg.innerHTML ="Unesi broj između 1 i 100";
        msg.style.color = "crimson";
        return;
    }

    if(value === randNumber){
        msg.innerHTML = "Pogodak. Broj je " + randNumber;
        msg.style.color = "green";
    }
    else if(value < randNumber) {
         msg.innerHTML = "Premalo";
        msg.style.color = "orange";
    }
    else{
        msg.innerHTML = "Previše";
        msg.style.color = "orange";
    }

    pokusaji++;
    updateAttemps();
}

function newGame() {
    randNumber = randomNumber();
    pokusaji=0;
    updateAttemps();
    msg.innerHTML="Nova igra - pokušaj ponovno";
    msg.style.color = "black";
    input.focus();
    input.value ="";
}