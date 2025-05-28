// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');

// i - index
// 3 partes for: criar variavel, criar condição, criar incremento
// for(let i = 10; i>=0; i--){
//     const parOuImpar = i%2 === 0? 'Par':'Impar';
//     console.log(`O número ${i} é ${parOuImpar}`);
// }

// utilizando for em array
const frutas = ['banana','maçã','morango','Augusto','João'];

for(let i = 0; i<frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}