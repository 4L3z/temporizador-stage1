let timerInterval;

function startTimer() {
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    let totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        Swal.fire({
            icon: "error",
            title: "Ingresa Un Numero Válido",
            text: "No estás poniendo un número en un input o tu número no es válido!",
          });;
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
            playRandomAudio();
            Swal.fire({
                title: "El Recreo Termino",
                icon: "info",
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `
Ok
                `,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
                  <i class="fa fa-thumbs-down"></i>
                `,
                cancelButtonAriaLabel: "Thumbs down"
              });
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
        document.getElementById('audio12'),
        document.getElementById('audio13'),
        document.getElementById('audio14'),
        document.getElementById('audio15'),
        document.getElementById('audio16'),
        document.getElementById('audio17')
    ];

    const randomIndex = Math.floor(Math.random() * audioElements.length);
    audioElements[randomIndex].play();
}


document.addEventListener("DOMContentLoaded", function() {
    const text = "Temporizador del recreo. Stage 1";
    const titleElement = document.getElementById("animated-title");
    let index = 0;

    function type() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 160) ; // Ajusta el tiempo de espera para cambiar la velocidad de la animación
        }
    }

    type();

    function changeColorAndShadow() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);


        titleElement.style.color = `rgb(${r}, ${g}, ${b})`;
        titleElement.style.textShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgb(${shadowR}, ${shadowG}, ${shadowB})`;
    }

    setInterval(changeColorAndShadow, 500); // Cambia el color y el text-shadow cada 500 ms (ajusta según tus preferencias)
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
        document.getElementById('audio17')
    ];

    volumeSlider.addEventListener('input', function() {
        const volume = volumeSlider.value;
        audioElements.forEach(audio => {
            audio.volume = volume;
        });
    });



    window.onload = function() {
        setTimeout(function() {
            var loader = document.getElementById('loader');
            var content = document.getElementById('content');
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 3000); // Retraso de 2 segundos
    };