 function newSecret() {
      return Math.floor(Math.random() * 100) + 1;
    }

    let secret = newSecret();
    let tries = 0;

    const form = document.getElementById('gameForm');
    const input = document.getElementById('guess');
    const msg = document.getElementById('msg');
    const attempts = document.getElementById('attempts');
    const newBtn = document.getElementById('newBtn');

    // Ažuriraj tekst pokušaja
    function updateAttempts() {
      attempts.textContent = 'Pokušaji: ' + tries;
    }

    // Početno
    updateAttempts();

    // Obrada submit događaja (gumb "Pogodi")
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // sprječava refresh stranice
      const value = parseInt(input.value, 10);

      // Validacija
      if (isNaN(value) || value < 1 || value > 100) {
        msg.textContent = 'Unesite cijeli broj između 1 i 100.';
        msg.style.color = 'crimson';
        return;
      }

      tries++;
      updateAttempts();

      if (value === secret) {
        msg.textContent = 'Pogodak! 🎉 Broj je ' + secret + '.';
        msg.style.color = 'green';
        // opcionalno: zaključaj polje ili predloži novu igru
      } else if (value < secret) {
        msg.textContent = 'Premalo!';
        msg.style.color = 'orange';
      } else {
        msg.textContent = 'Preveliko!';
        msg.style.color = 'orange';
      }
    });

    // Nova igra (reset)
    newBtn.addEventListener('click', function() {
      secret = newSecret();
      tries = 0;
      input.value = '';
      msg.textContent = 'Nova igra — pokušajte ponovno.';
      msg.style.color = 'black';
      updateAttempts();
      input.focus();
    });