/*
Primitivos (imutáveis) - string,number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Augusto',
    sobrenome: 'Felipe'
}
const b = {...a};
a.nome = 'João';

console.log(a)
console.log(b)

// Array independente, cópia do array a
/*let a = [1,2,10];
let b = [...a]; 
console.log(a,b)
//
a.push(11)
b.pop()
console.log(a,b)*/

// Cópia de dados primitivos
/*let b = a; 
let a = 'A';
console.log(a,b);
//
a = 'Outra coisa'
console.log(a,b);*/