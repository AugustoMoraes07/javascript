const pessoa1 = {
    nome:'Augusto',
    sobrenome:'Moraes',
    idade:18,

    fala() {
        console.log(`A minha idade é ${this.idade}`);
        this.incrementaIdade();
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.fala();
pessoa1.fala();
pessoa1.fala();


// Utilizando função com argumentos, retornando em forma de objeto os parâmetros
// function criaObjeto(nome,sobrenome,idade){
//     return {nome,sobrenome,idade}; 
// }

// const pessoa1 = criaObjeto('Augusto', 'Moraes', 18);

// console.log(pessoa1.nome);

