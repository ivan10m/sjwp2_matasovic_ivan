    function newSecret() {
      return Math.floor(Math.random() * 100) + 1;
    }

    let secret = newSecret();
    let tries = 0;

    function updateAttempts() {
      document.getElementById('attempts').textContent = 'Pokušaji: ' + tries;
    }

    updateAttempts();

    function checkNumber(event) {
      event.preventDefault(); // spriječi refresh
      const input = document.getElementById('guess');
      const msg = document.getElementById('msg');
      const value = parseInt(input.value, 10);

      if (isNaN(value) || value < 1 || value > 100) {
        msg.textContent = 'Unesite broj između 1 i 100.';
        msg.style.color = 'crimson';
        return;
      }

      tries++;
      updateAttempts();

      if (value === secret) {
        msg.textContent = 'Pogodak! 🎉 Broj je ' + secret + '.';
        msg.style.color = 'green';
      } else if (value < secret) {
        msg.textContent = 'Premalo!';
        msg.style.color = 'orange';
      } else {
        msg.textContent = 'Preveliko!';
        msg.style.color = 'orange';
      }
    }

    function newGame() {
      secret = newSecret();
      tries = 0;
      document.getElementById('guess').value = '';
      document.getElementById('msg').textContent = 'Nova igra — pokušajte ponovno.';
      document.getElementById('msg').style.color = 'black'
      updateAttempts();
      document.getElementById('guess').focus();
    }
  