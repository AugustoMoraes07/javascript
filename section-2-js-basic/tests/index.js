

// Colocando os dados em um object
function enviarDados(nome,sobrenome,altura,peso) {
    return {nome,sobrenome,altura,peso};
};
const dados = enviarDados('Augusto','Moraes',165,53);

// Adicionar um Array para cada pessoa com seus dados
function criaPessoa(dados,numero){

}

const lista = criaPessoa(dados,numero);

console.log(lista.length)
