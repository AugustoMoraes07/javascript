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



function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Valen');
const resto = fala('tina');

console.log(resto);