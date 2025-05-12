// Tirar evento de submit do form
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // tiro carregamento/envio
    const inputPeso = e.target.querySelector('#peso'); // selecionei dados pelo elemento
    const inputAltura = e.target.querySelector('#altura');// selecionei dados pelo elemento

    const peso = Number(inputPeso.value); // converti para número e peguei apenas o vlaor
    const altura = Number(inputAltura.value);// converti para número e peguei apenas o vlaor

    // detectar se é número válido
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc)
    
    const msg = `Imc:${imc} Nível:${nivelImc}`
    setResultado(msg, true);
});



function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso,altura){
    const imc = peso / altura**2;
    return imc.toFixed(2)
}

function criaP() {
    const p = document.createElement('p');
    return p;
}


function setResultado(msg, isValid) {
    const res = document.querySelector('#res');
    res.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('valido');
    } else{
        p.classList.add('invalido');
    }
    p.innerHTML = msg;
    res.appendChild(p);
}