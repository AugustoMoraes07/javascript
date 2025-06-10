
// const nome = 'Augusto';
// let i = 0;

// while (i<nome.length){
//     console.log(nome[i]);
//     i++;
// }

// console.log('Continuando...')

function numeroRandom(min,max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = numeroRandom(min,max);

// while (rand !== 10){
//     rand = numeroRandom(min,max);
//     console.log(rand);
// }

do{
    rand = numeroRandom(min,max);
    console.log(rand);
} while(rand !== 10);
