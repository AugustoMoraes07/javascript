function meuEscopo() {
    const btnCalc = document.getElementById('calculo');
    const telaResultado = document.getElementById('res');

    btnCalc.addEventListener("submit", function (e) {
        e.preventDefault(); // Interrompa o envio dos dados

        // Pegar os dados
        let peso = document.getElementById('peso');
        let altura = document.getElementById('altura');


        // Após tudo, alterar para detectar , e substituir pelo . function subsVirgula() {}

        // Validação de número
        if (numeroOuNao(peso) === true && numeroOuNao(altura) === true) {
            // // Fazer o cálculo de imc
            // peso = Number(peso);
            // altura = Number(altura);
            // const seuImc = (peso) / (altura * altura);

            // Mandar para tela de resultado o imc
            // telaResultado.innerHTML = `<p>Seu imc é ${seuImc.value}</p>`;
            alert(`O seu imc é ${seuImc}`);     
        } else {
            alert();     
            telaResultado.innerHTML = `<p>Digite algo válido</p>`;
        }
    })

    // Validar se realmente é um número
    function numeroOuNao(numero) {
        const convert = Number(numero);
        return !Number.isNaN(convert);
    }
}

meuEscopo();