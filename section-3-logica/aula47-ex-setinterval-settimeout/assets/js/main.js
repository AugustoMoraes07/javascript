function relogio(){

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
}

const cronometro = document.querySelector('#cronometro');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        cronometro.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    
    if (el.classList.contains('start')) {
        cronometro.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    
    if (el.classList.contains('pause')) {
        clearInterval(timer);
        cronometro.classList.add('pausado');
    }
    
    if (el.classList.contains('reset')) {
        clearInterval(timer);
        cronometro.innerHTML = '00:00:00';
        segundos = 0;
        cronometro.classList.remove('pausado');
    }
})
}

relogio();




