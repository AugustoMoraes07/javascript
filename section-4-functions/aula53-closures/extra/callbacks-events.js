function mensagem(msg, tempo){
    setTimeout(()=>{
        console.log(msg);
    }, tempo);
}

mensagem('Mensagem chegando após 2 segundos...');
mensagem('Olá, seja bem-vindo!', 2000);