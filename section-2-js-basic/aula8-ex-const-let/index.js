/*
Augusto Felipe Moraes Fernandes tem 18 anos, pesa 55kg
tem 1.65 de altura e seu IMC é de 33,33
Augusto Felipe Moraes Fernandes nasceu em 2007
*/

const nome = 'Augusto Felipe';
const sobrenome = 'Moraes Fernandes';
const idade = '18';
const peso = '55';
const alturaEmM = '1.65';
let imc; // peso/altura
let anoNascimento;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2025-idade;

console.log(`${nome} ${sobrenome} tem ${18} anos, pesa ${peso}kg`);
console.log(`Tem ${alturaEmM} de altura e seu imc é ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
