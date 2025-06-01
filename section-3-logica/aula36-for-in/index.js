// For in -> lê os índices ou chaves do objeto
//               0       1       2
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for( let i in frutas){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome:'Augusto',
    sobrenome:'Moraes Fernandes',
    idade:17
}

for (let chave in pessoa){
    console.log(chave ,pessoa[chave]);
}