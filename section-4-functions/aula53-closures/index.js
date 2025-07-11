// Global
function retornafuncao(nome){
    return function(){
        return nome;
    };
}
const funcao = retornafuncao('Augusto');
const funcao2 = retornafuncao('Felipe');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
