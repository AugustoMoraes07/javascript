/*
Condicionais, server para desviar o fluxo de um algoritmo, conforme as expressões(condições)
Existe 3 formas de utiliza-los, neles podem ser utilizados literalmente tudo que foi aprendido
if (condição) -> Como se inicia as estruturas condicionais, Primeira situação
else if (condição)-> Segunda situação
else - Padrão caso falhe nas condicionais anteriores
*/

// Pegando os dados e deixando em minúsculo para não dar erro por conta case-sensitive
let gen = prompt('Defina seu gênero: (M) (F) (?)');
gen = gen.toLowerCase();

// Verificador com if, para saber se é um número ou não (Caso não for, vai parar o fluxo)
if(numeroOuNao(gen)){
    alert('[ERRO] Digite uma das opções: (M) (F) (?)');
} else {
    // Condicões para detectar o gênero
    if (gen === 'm') {
        alert('Você é homem!');
    } else if (gen === 'f') {
        alert('Você é mulher!');
    } else {
        alert('Você tem outro gênero!');
    }
}


// Função que detecta se é um número ou não
function numeroOuNao(valor) {
    const convertGen = Number(valor);
    return !Number.isNaN(convertGen);
}