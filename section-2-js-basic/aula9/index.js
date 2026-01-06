const nome = 'Augusto'; // string
const nome1 = "Augusto"; // string
const nome2 = `Augusto`; //string
const num1 = 10; // number
const num2 = 10.5; // number
let nomeAluno; // undefined = Não aponta para local nenhum na memória
let sobrenomeAluno = null; // nulo -> não aponta para lugar nenhum na memória, ta desativado
const aprovado = true; // boolean -> true or false (lógico)

const a = [1, 2];
const b = a;

console.log(b, a); 

b.push(3);
console.log(a, b);

