// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9


num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));


// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(typeof Number.isInteger(num1));
// console.log(Number.isNaN(temp));
// let temp = num1*'5';
// console.log(temp);
