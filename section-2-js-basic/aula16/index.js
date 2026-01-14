//               0          1       2
let alunos = ['Augusto', 'João', 'Cleiton']; // Kauã, Kauan
alunos = 123;

console.log(typeof alunos);
console.log(alunos instanceof Array);

// Selecionei alguns valores do array com o slice
// alunos.push('Kauã');
// alunos.push('Kauan');
// console.log(alunos);
// console.log(alunos.slice(0, 3));

// Quando não existe o índice = undefined
// console.log(alunos[45]); 

// Removendo um valor específico e mantendo o índice
// delete alunos[1];
// console.log(alunos[40]);

// Removendo indice e valores shift = começo pop = final
// const removido = alunos.shift();
// const removido2 = alunos.pop();
// console.log(removido);
// console.log(alunos);

// Adição simplificada no começo
// alunos.unshift('Fábio');
// alunos.unshift('Luiza');

// Adição simplificada dos valores no final
// alunos.push('Luiza');
// alunos.push('Fábio');

// Adição de valor pelo comprimento
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// Adição e substituição de valores por índice
// alunos[0] = 'Felipe';
// alunos[3] = 'Luiza';

// Puxei o Array e selecionei um índice
// console.log(alunos);
// console.log(alunos[0]);