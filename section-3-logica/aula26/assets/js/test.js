function meuEscopo() {
    const btnCalc = document.getElementById('calculo');
    const telaResultado = document.getElementById('res');

    btnCalc.addEventListener("click", function (e) {
        e.preventDefault(); // Interrompa o envio dos dados
        // Pegar os dados
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');

        // Verificação se ambos valores são números e as ações
        if(numeroOuNao(peso.value) === true && numeroOuNao(altura.value) === true){
            telaResultado.innerHTML = `Seu peso e altura estão válidos\n`+
                                      `O seu imc é ${calcImc(peso.value, altura.value)}`;
        
        } else{
            telaResultado.innerHTML = `[ERRO] Digite um valor`;
        }
        
        
        
    })
    
    
    // Função para validar se realmente é um número
    function numeroOuNao(num = 0) {
        // Após tudo, alterar para detectar , e substituir pelo . function subsVirgula() {}
        const convertendoNum = Number(num);
        const EhNumero = !Number.isNaN(convertendoNum); 
        return EhNumero;
}

    // Calcular o imc
    function calcImc(peso, altura){
        const imc = peso/(altura*altura);
        return imc.toFixed(2);
    }
}

meuEscopo();


 // Validação de número (Não está funcionando corretamente)
        // if (numeroOuNao(peso) === true && numeroOuNao(altura) === true) {
        //     // Fazer o cálculo de imc
        //     peso = Number(peso);
        //     altura = Number(altura);
        //     const seuImc = (peso) / (altura * altura);
        //     alert();
            
        //     // Mandar para tela de resultado o imc
        //     telaResultado.innerHTML = `<p>Seu imc é ${seuImc.value}</p>`;
        // } else {
        //     // Dar um aviso de erro
        // }