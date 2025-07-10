// arguments que sustenta todos os argumentos enviados
// function funcao(a,b,c){
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4);

// criando variaveis undefined
// function funcao(a, b, c, d, e, f){
//     console.log(a, b, c, d, e, f);
// }
// funcao(1,2,3);

// forçando padrao
// function funcao(a, b = 1, c = 1){
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// via desestruturação
// function funcao([nome, sobrenome, idade]){
//     console.log(nome, sobrenome, idade);
// }
// funcao(['Augusto', 'Moraes', 17]);

// rest
// function conta(operador, acumulador, ...numeros){
//     for(let numero of numeros){

//        if (operador === '+') acumulador += numero;
//        if (operador === '-') acumulador -= numero;
//        if (operador === '*') acumulador *= numero;
//        if (operador === '/') acumulador /= numero;

//     }

//     console.log(acumulador);
// };
// conta('+', 1, 20, 30, 40, 50);

// arguments não existe em arrow function
// const conta = (operador, acumulador, ...numeros) => {
//     console.log(arguments);
// };
// conta('+', 1, 20, 30, 40, 50);

const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
