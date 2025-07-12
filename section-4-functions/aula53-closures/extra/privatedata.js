function criarUsuario(nome){
    const senha = '9876';
    return {
        getNome: function(){return nome;},
        verificarSenha: function(tentativa){return tentativa===senha?'Senha correta':'Senha incorreta';}
    }
}

const user = criarUsuario('Augusto');
console.log(user.getNome());
console.log(user.verificarSenha('1234'));
console.log(`${user.senha} (Senha sem acesso direto!)`);