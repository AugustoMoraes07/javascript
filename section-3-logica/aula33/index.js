const pessoa = {
    nome: 'Augusto',
    sobrenome: 'Moraes',
    idade: 18,
    endereco: {
        rua: 'Av Brasil',
        numero: 100
    }
};

// pré-definindo a propriedade
const {nome, sobrenome, ...resto} = pessoa;
// const {endereco: {rua: r,numero = 12345}} = pessoa;
console.log(nome);
console.log(resto);