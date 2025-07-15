// Receita de bolo em 4 etapas

function prepararIngredientes(callback) {
    console.log('1. Misturando farinha, ovos e açúcar...');
    console.log('Esperando 1 segundo...');
    setTimeout(() => {
        if (callback) callback();
    }, 1000);
}

function aquecerForno(callback) {
    console.log('2. Pré-aquecendo o forno a 180ºC...');
    console.log('Esperando 2 segundos...');
    setTimeout(() => {
        if (callback) callback();
    }, 2000);
}

function assarBolo(callback) {
    console.log('3. Assando o bolo por 30 minutos...');
    console.log('Esperando por 3 segundos...');
    setTimeout(() => {
        if (callback) callback();
    }, 3000);
}

function decorarBolo(){
    console.log('4. Bolo pronto! Decorando com chantilly...');
}

// Callbacks
prepararIngredientes(() => {
    aquecerForno(() => {
        assarBolo(decorarBolo);
    });
});
