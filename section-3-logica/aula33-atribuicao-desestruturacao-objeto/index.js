const pessoa = {
    nome:'Augusto',
    sobrenome:'Moraes',
    idade: 17,
    endereço:{
        rua:'São Pedro',
        numero:100
    }
};

// Atribuição via desestruturação com renomeando e pré-definição
// const {nome: teste = '', sobrenome, idade} = pessoa;
// console.log(teste,sobrenome,idade)

// Atribuição via desestruturação
// const {endereço: {rua: r = '', numero: n = 12345}, endereço} = pessoa;
// console.log(r, n);
// console.log(endereço);


// Atribuição via desestruturação com rest
const {nome, ...resto} = pessoa;
console.log(nome, resto)