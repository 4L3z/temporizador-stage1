let timerInterval;
let timerAlertActive = false;
let audioAlertActive = false;

function startTimer() {
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    let totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        Swal.fire({
            icon: "error",
            title: "Ingresa Un Numero Válido",
            text: "No estás poniendo un número en un input o tu número no es válido!",
        });
        return;
    }

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            if (!timerAlertActive) {
                playRandomAudio();
            }
        }

        totalSeconds--;
    }, 1000);
}

function playRandomAudio() {
    const audioElements = [
        document.getElementById('audio1'),
        document.getElementById('audio2'),
        document.getElementById('audio3'),
        document.getElementById('audio4'),
        document.getElementById('audio5'),
        document.getElementById('audio6'),
        document.getElementById('audio7'),
        document.getElementById('audio8'),
        document.getElementById('audio9'),
        document.getElementById('audio10'),
        document.getElementById('audio11'),
        document.getElementById('audio12'),
        document.getElementById('audio13'),
        document.getElementById('audio14'),
        document.getElementById('audio15'),
        document.getElementById('audio16'),
        document.getElementById('audio17'),
        document.getElementById('audio18'), // Añadir el nuevo audio aquí
        document.getElementById('audio19')
    ];
    
    const randomIndex = Math.floor(Math.random() * audioElements.length);

    if (randomIndex === 17) { // Si el audio seleccionado es el número 18
        showLanguageSelectionAlert(audioElements[randomIndex]);
    } else {
        audioElements[randomIndex].play();
        showRecreoTerminoAlert();
    }
}

function showRecreoTerminoAlert() {
    Swal.fire({
        title: "El Recreo Termino",
        icon: "info",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Ok',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: "Thumbs down"
    }).then(() => {
        timerAlertActive = false;
    });
}

// Función para mostrar la alerta de SweetAlert2 al seleccionar el nuevo audio
function showLanguageSelectionAlert(audioElement) {
    if (audioAlertActive) return;
    audioAlertActive = true;
    Swal.fire({
        title: 'English or Spanish?',
        showCancelButton: true,
        confirmButtonText: 'English',
        confirmButtonColor: 'red',
        cancelButtonColor: 'blue',
        cancelButtonText: 'Spanish',
        background: '#241e1e',
        color: '#FFF'
    }).then((result) => {
        let message = '';
        if (result.isConfirmed) {
            message = 'Whoever moves is gay';
            audioElement.play();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            message = 'El que se mueva es gay';
            audioElement.play();
        }
        
        Swal.fire(message).then(() => {
            audioAlertActive = false;
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const text = "Temporizador del recreo. Stage 1";
    const titleElement = document.getElementById("animated-title");
    let index = 0;

    function type() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 160); // Ajusta el tiempo de espera para cambiar la velocidad de la animación
        }
    }

    type();

    function changeColorAndShadow() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        titleElement.style.color = `rgb(${r}, ${g}, ${b})`;
    }

    setInterval(changeColorAndShadow, 1400);
});
  // Volume slider functionality
  const volumeSlider = document.getElementById('volume-slider');
  const audioElements = [
      document.getElementById('audio1'),
      document.getElementById('audio2'),
      document.getElementById('audio3'),
      document.getElementById('audio4'),
      document.getElementById('audio5'),
      document.getElementById('audio6'),
      document.getElementById('audio7'),
      document.getElementById('audio8'),
      document.getElementById('audio9'),
      document.getElementById('audio10'),
      document.getElementById('audio11'),
      document.getElementById('audio12'),
      document.getElementById('audio13'),
      document.getElementById('audio14'),
      document.getElementById('audio15'),
      document.getElementById('audio16'),
      document.getElementById('audio17'),
      document.getElementById('audio18'),
      document.getElementById('audio19')
  ];

  volumeSlider.addEventListener('input', function() {
      const volume = volumeSlider.value;
      audioElements.forEach(audio => {
          audio.volume = volume;
      });
  });
