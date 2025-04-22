// IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1))
console.log(typeof num1)

// console.log(num1.toString()+num2);  Formas de transformar em string
// num1 = num1.toString(); converter permanentemente
// console.log(num1.toString(2)); converter para um número binario
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1)); saber se é número inteiro
// console.log(Number.isNaN(temp)); conta inválida