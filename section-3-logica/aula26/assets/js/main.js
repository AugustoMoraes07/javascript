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
        const convertendoNum = Number(num);
        const EhNumero = num !== '' && !Number.isNaN(convertendoNum);
        return EhNumero;
    }

    // Identificando se as métricas digitadas correspondem com as da vida real para as pessoas
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

    
    // Caso número seja válido
    function greenMsg(p, a) {
        telaResultado.classList.remove('red-msg');
        telaResultado.classList.add('green-msg');
        const imc = calcImc(p, a);
        
        telaResultado.innerHTML = '';
        const paragrafo = criandoP();
        paragrafo.innerHTML = `O seu IMC é ${imc}`;
        
        const outroParagrafo = criandoP();
        outroParagrafo.innerHTML += `Nível: ${statsImc(Number(imc))}`;
        telaResultado.appendChild(paragrafo);
        telaResultado.appendChild(outroParagrafo);
    }
    
    // Caso número seja inválido
    function redMsg() {
        telaResultado.classList.remove('green-msg');
        telaResultado.classList.add('red-msg');

        telaResultado.innerHTML = '';
        const paragrafo = criandoP();
        paragrafo.innerHTML = '[ERRO] Digite um valor válido';
        telaResultado.appendChild(paragrafo);
    }

        // Criando parágrafo
    function criandoP() {
        const p = document.createElement('p');
        return p;
    }

    // Calcular o imc
    function calcImc(p, a) {
        const imc = p / (a * a);
        return imc.toFixed(2);
    }

    // Nível/Grau de imc de acordo com seu imc (Condicionais)
    function statsImc(i) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (i >= 39.9) return nivel[5];
        if (i >= 34.9) return nivel[4];
        if (i >= 29.9) return nivel[3];
        if (i >= 24.9) return nivel[2];
        if (i >= 18.5) return nivel[1];
        if (i < 18.5) return nivel[0];
    }
}

meuEscopo();
