var imag = ['voleibol-og (1).jpg', 'imag2.png', 'imag4.jpeg'];
var cont = 0;

function carrusel(botones) {
    botones.addEventListener('click', e => {
        let atras = botones.querySelector('.atras');
        let adelante = botones.querySelector('.adelante');
        let img = botones.querySelector('img');
        let tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imag[cont - 1];
                cont--;
            } else {
                img.src = imag[imag.length - 1];
                cont = imag.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imag.length - 1) {
                img.src = imag[cont + 1];
                cont++;
            } else {
                img.src = imag[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let botones = document.querySelector('.botones');
    carrusel(botones);
});

