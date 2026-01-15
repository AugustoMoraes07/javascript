/*
Primitivos (imutáveis) - string,number,boolean,undefined,null (bigint,symbol) - Valores copiados

Referência (mutável) - array, object, function - Valores passados por referência
*/

const a = {
    nome:'Augusto',
    sobrenome:'Moraes'
};
const b = a; // Referência
const c = {...a}; // Cópia - Spread

console.log(a,b);

b.nome = 'Eliane';
console.log(a,b);

a.nome = 'Antônio';
a.sobrenome = 'Fernandes';
console.log(a,b,c);


// Refrência Dependente e Cópia independente do array
// let a = ['A'];
// let b = [...a]; // Cópia
// let c = b; // Referência
// console.log(a,b,c);

// b.push('B')
// console.log(a,b,c);

// a.pop()
// console.log(a,b,c);

// a.push('Outro valor...');
// console.log(a,b,c);

// Cópia independente
// let a = 'A';
// let b = a; // Cópia
// console.log(a,b);

// a = 'B';
// console.log(a,b);
