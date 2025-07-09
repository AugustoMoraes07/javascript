// Declaração de função (Function hoisting)

falaOi();

function falaOi(){
    console.log('Oi');
}

// First-class-objects (Objetos de primeira classe)
// Function expression
const souumDado = function(){
    console.log('Sou um dado.');
};
souumDado();

// function executaFuncao(funcao){
//     console.log('Vou executar sua função abaixo:')
//     funcao();
// }
// executaFuncao(souumDado);


//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow funciton');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }};
obj.falar();