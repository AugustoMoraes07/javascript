// Global
function retornafuncao(){
    const nome = 'Augusto'; 
    return function(){
        return nome;
    };
}
const funcao = retornafuncao();
console.log(funcao);
