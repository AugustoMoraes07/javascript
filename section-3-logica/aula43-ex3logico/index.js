function isFizzBuzz(numero) {
    if(typeof numero !== 'number') return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero
}


console.log('a', isFizzBuzz('a'));

for(let i = 0; i<=100;i++){
    console.log(i,isFizzBuzz(i));

}