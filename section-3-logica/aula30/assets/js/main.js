function meuEscopo(){
    const caixaData = document.querySelector('#data');
    const data = new Date();

    caixaData.innerText = getDataTxt();

    function getDataTxt(){
        const diaSemana = isDayWeek();
        const day = isDay();
        const month = isMonth();
        const year = isYear();
        const hour = isHour();
        const minute = isMinute();

        // dia da semana, dia de mês de ano
        // hora:minuto
        return `${diaSemana}, ${day} de ${month} de ${year}\n${hour}:${minute}`;
    }

    // dia da semana
    function isDayWeek(){
        const dia = data.getDay();

        const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

        return diaSemana[dia];

        // verificando dia da semana por extenso
        // switch(dia){
        //     case 1: return `domingo`;
        //     case 2: return `segunda-feira`;
        //     case 3: return `terça-feira`;
        //     case 4: return `quarta-feira`;
        //     case 5: return `quinta-feira`;
        //     case 6: return `sexta-feira`;
        //     case 7: return `sábado`;
        // }   
    }


    // dia
    function isDay(){
        const day = data.getDate();
        return zeroEsq(day);
    }

    // mes
    function isMonth(){
        const month = data.getMonth();

        const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']

        return meses[month]

        // month for extense
        // switch(month){
        //     case 1: return `janeiro`;
        //     case 2: return `fevereiro`;
        //     case 3: return `março`;
        //     case 4: return `abril`;
        //     case 5: return `maio`;
        //     case 6: return `junho`;
        //     case 7: return `julho`;
        //     case 8: return `agosto`;
        //     case 9: return `setembro`;
        //     case 10: return `outubro`;
        //     case 11: return `novembro`;
        //     case 12: return `dezembro`;
        // }
    }

    // ano
    function isYear(){
        const year = data.getFullYear();
        return year;
    }

    // hora
    function isHour(){
        const hour = data.getHours();
        return zeroEsq(hour);
    }

    // minuto
    function isMinute(){
        const minute = data.getMinutes();
        return zeroEsq(minute);
    }

    // passar zero em números < 10
    function zeroEsq(num){
        return num >= 10? num:`0${num}`;
    }
}

meuEscopo();

// const caixaData = document.querySelector('#data');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }

// caixaData.innerHTML = data.toLocaleString('pt-BR', opcoes);

