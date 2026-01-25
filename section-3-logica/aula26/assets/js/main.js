function meuEscopo() {
    const btnCalc = document.getElementById('calculo');
    const telaResultado = document.getElementById('res');

    btnCalc.addEventListener("click", function (e) {
        // Interrompa o envio dos dados
        e.preventDefault();

        // Pegar os dados
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');

        // Verificar valores são números e executa as funções
        if (numeroOuNao(peso.value) === true && numeroOuNao(altura.value) === true) {

            // Verificar se os valores são números válidos
            if (realMetrics(peso.value, altura.value) === true) {
                // Passou na validação
                greenMsg(peso.value, altura.value);

            } else {
                // Falhou na validação
                redMsg();
            }
        } else {
            // Falhou na validação
            redMsg();
        }
    })


    // Função para validar se realmente é um número
    function numeroOuNao(num) {
        // Após tudo, alterar para detectar , e substituir pelo . function subsVirgula() {}
        const convertendoNum = Number(num);
        const EhNumero = !Number.isNaN(convertendoNum);
        return EhNumero;
    }

    // Calcular o imc
    function calcImc(p, a) {
        const imc = p / (a * a);
        return imc.toFixed(2);
    }

    // Nível/Grau de imc de acordo com seu imc (Condicionais)
    function statsImc(i) {
        if (i < 18.5) return 'Abaixo do peso';
        if (i < 24.9) return 'Peso normal';
        if (i < 29.9) return 'Sobrepeso';
        if (i < 34.9) return 'Obesidade grau 1';
        if (i < 39.9) return 'Obesidade grau 2';
        if (i > 39.9) return 'Obesidade grau 3';
    }

    // Caso número seja válido
    function greenMsg(p, a) {
        telaResultado.classList.remove('red-msg');
        telaResultado.classList.add('green-msg');

        const imc = calcImc(p, a);
        telaResultado.innerHTML = `<p>O seu IMC é ${imc}</p>`;
        telaResultado.innerHTML += `<p>Nível: ${statsImc(Number(imc))}</p>`;
    }

    // Caso número seja inválido
    function redMsg() {
        telaResultado.classList.remove('green-msg');
        telaResultado.classList.add('red-msg');

        telaResultado.innerHTML = `<p>[ERRO] Digite um valor válido</p>`;
    }


    function realMetrics(p, a) {
        const maiorAltura = 3;
        const menorAltura = 0.546;
        const maiorPeso = 635;
        const menorPeso = 2;

        if (a > maiorAltura) {
            return false;
        } else if (a < menorAltura) {
            return false;
        } else if (p > maiorPeso) {
            return false;
        } else if (p < menorPeso) {
            return false;
        } else {
            return true;
        }
    }

}


meuEscopo();