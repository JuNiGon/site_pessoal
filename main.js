let contador = 1;

setInterval(function(){
    document.getElementById('slide_' + contador).checked = true;
    contador ++;
    if(contador > 5) {
        contador = 1;
    }
}, 3000)