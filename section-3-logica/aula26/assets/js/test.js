function meuEscopo() {
    const btnCalc = document.getElementById('calculo');
    const telaResultado = document.getElementById('res');

    btnCalc.addEventListener("click", function (e) {
        // Interrompa o envio dos dados
        e.preventDefault(); 

        // Pegar os dados
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');

        // Verificação se ambos valores são números e as ações
        if (numeroOuNao(peso.value) === true && numeroOuNao(altura.value) === true) {
            const imc = calcImc(peso.value, altura.value);
            telaResultado.innerHTML = `<p>O seu IMC é ${imc}</p>`;
            telaResultado.innerHTML += `<p>Nível: ${statsImc(Number(imc))}</p>`;
        } else {
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
    function calcImc(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    // Nível/Grau de imc de acordo com seu imc (Condicionais)
    function statsImc(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 24.9) {
            return 'Peso normal'
        } else if (imc < 29.9) {
            return 'Sobrepeso'
        } else if(imc < 34.9){
            return 'Obesidade grau 1'
        } else if(imc < 39.9){
            return 'Obesidade grau 2'
        } else{
            return 'Obesidade grau 3'
        }
    }
}


    meuEscopo();