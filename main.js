let contador = 1;
const totalSlides = 5;

setInterval(function() {
    nextSlide();
}, 3000);

function nextSlide() {
    contador++;
    if (contador > totalSlides) {
        contador = 1;
    }
    document.getElementById('slide_' + contador).checked = true;
}

function previousSlide() {
    contador--;
    if (contador < 1) {
        contador = totalSlides;
    }
    document.getElementById('slide_' + contador).checked = true;
}
