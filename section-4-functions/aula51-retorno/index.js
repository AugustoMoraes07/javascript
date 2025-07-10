// return
// Retorna um valor
// Termina a função

// function soma(a,b){
//     return a + b;
// }
//  
// soma(2,3);

// function com return e objeto normal
// function criaPessoa(nome, sobrenome){
//     return{nome, sobrenome};
// }
// const p1 = criaPessoa('Augusto', 'Moraes');
// const p2 = {nome: 'Jao', sobrenome: 'Oliveira'};
// console.log(typeof p1);
// console.log(typeof p2);


// funcão cria outra
// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }
// const fala = falaFrase('Valen');
// const resto = fala('tina');
// console.log(resto);

// function duplica(n){
//     return n * 2;
// }
// function triplica(n){
//     return n * 3;
// }
// function quadriplica(n){
//     return n * 4;
// }

function criaMultiplicador(multiplicador){
    // multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const  duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
