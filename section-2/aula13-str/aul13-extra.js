let umaStr = 'auGusTO';

// Organizando as letras
const primeiraL = umaStr[0].toUpperCase();
const outrasL = umaStr.slice(1).toLowerCase();
umaStr = primeiraL + outrasL;

console.log(umaStr); // Augusto
console.log(`Quantidade de letras:${umaStr.length}`); // Quantidade de letras

// Contando letras maiúsculas
let qtdMaiúsculas = 0;

for(let letra of umaStr){
    if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()){
        ++qtdMaiúsculas;
    }
}

console.log(`Quantidade de letras maiúsculas:${qtdMaiúsculas}`)

// Contando letras minúsculas
let qtdMinúsculas = 0;

for(let letra of umaStr){
    if(letra === letra.toLowerCase() && letra !== letra.toUpperCase()){
        ++qtdMinúsculas;
    }
}
console.log(`Quantidade de letra minúsculas:${qtdMinúsculas}`)