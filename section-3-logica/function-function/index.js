function meuEscopo(){
    const nome = 'a';

    console.log(isNome(validarNome(nome)));

    function isNome(n){
        return n;
    }
    
    function validarNome(pessoa){
        const converterNum = Number(pessoa);
        const isNan = Number.isNaN(converterNum);
        return isNan === true ? pessoa:'[ERRO]';
    }
}

meuEscopo();
