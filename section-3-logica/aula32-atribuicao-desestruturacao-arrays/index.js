// let a = 'a'; // B
// let b = 'b'; // C
// let c = 'c'; // A

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);

// ... rest, spread
// const numeros = [10000, 2323, 3323232, 4434343, 5545454, 66363, 7647657, 85454, 95454];
// const [primeiro, segundo, terceiro, ...resto] = numeros;
// console.log(primeiro, segundo, terceiro);
// console.log(resto);

//  empty space in array
// const numeros = [10, 20, 30, 40, 50];
// const [primeiro, , segundo, , terceiro] = numeros;
// console.log(primeiro, segundo, terceiro);

// index in index by assignment destructuring (array) muito complexo, melhor nomear cada indice com ex: const [lista1[0], lista2[1], lista3[2]] = numeros;
//                     0         1         2
//                     0  1  2   0  1  2   0  1  2
// const numeros = [  [1, 2, 3],[4, 5, 6],[7, 8, 9]];
// const [, [ ,, seis], ] = numeros;
// console.log(seis)