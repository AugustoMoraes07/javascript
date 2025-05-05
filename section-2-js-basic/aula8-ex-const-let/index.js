/*
Augusto Felipe Moraes Fernandes tem 17 anos, pesa 53 kg

tem 1.65 de altura e seu IMC é 19.467401285583104


*/
const nome = 'Augusto Felipe';
const sobrenome = 'Moraes Fernandes';
const idade = 18;
const peso = 53;
const alturaM = 1.65;
let imc = peso/(alturaM**2);
let anoNascimento = 2025-idade;

console.log(`${nome} ${sobrenome}, vai completar ${idade} anos. Pesa ${peso}kg e tem ${alturaM}(M) de altura`);
console.log(`Seu imc é ${imc}`);
console.log(`Seu ano de nascimento é ${anoNascimento}`);