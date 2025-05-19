function meuEscopo() {
    // const data = new Date();
    // const dataBrasil = formataData(data);
    // const tela = document.querySelector('.container')


    // function getWeekTxt(dayWeek){
    //     const nomeDiaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira',  'sábado']
    //     return nomeDiaSemana[dayWeek];
    //     // let semanaTxt;
    //     // switch(dayWeek){
    //     //     case 0:
    //     //     semanaTxt = 'domingo';
    //     //     return semanaTxt;   
    //     //     case 1:
    //     //     semanaTxt = 'segunda-feira';
    //     //     return semanaTxt;   
    //     //     case 2:
    //     //     semanaTxt = 'terça-feira';
    //     //     return semanaTxt;   
    //     //     case 3:
    //     //     semanaTxt = 'quarta-feira';
    //     //     return semanaTxt;   
    //     //     case 4:
    //     //     semanaTxt = 'quinta-feira';
    //     //     return semanaTxt;   
    //     //     case 5:
    //     //     semanaTxt = 'sexta-feira';
    //     //     return semanaTxt;   
    //     //     case 6:
    //     //     semanaTxt = 'sábado';
    //     //     return semanaTxt;   
    //     //     default:
    //     //     semanaTxt = '[ERRO] Dia da semana inválido';
    //     //     return semanaTxt;
    //     // }
    // }

    // function nameMonth(mes){
    //     const nomeMes = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    //     return nomeMes[mes];
    //     // let nomeMes;
    //     // switch(mes){
    //     //     case 0:
    //     //         nomeMes = 'janeiro';
    //     //         return nomeMes
    //     //     case 1:
    //     //         nomeMes = 'fevereiro';
    //     //         return nomeMes;
    //     //     case 2:
    //     //         nomeMes = 'março';
    //     //         return nomeMes;
    //     //     case 3:
    //     //         nomeMes = 'abril';
    //     //         return nomeMes;
    //     //     case 4:
    //     //         nomeMes = 'maio';
    //     //         return nomeMes;
    //     //     case 5:
    //     //         nomeMes = 'junho';
    //     //         return nomeMes;
    //     //     case 6:
    //     //         nomeMes = 'julho';
    //     //         return nomeMes;
    //     //     case 7:
    //     //         nomeMes = 'agosto';
    //     //         return nomeMes;
    //     //     case 8:
    //     //         nomeMes = 'setembro';
    //     //         return nomeMes;
    //     //     case 9:
    //     //         nomeMes = 'outubro';
    //     //         return nomeMes;
    //     //     case 10:
    //     //         nomeMes = 'novembro';
    //     //         return nomeMes;
    //     //     case 11:
    //     //         nomeMes = 'dezembro';
    //     //         return nomeMes;
    //     //     default:
    //     //         nomeMes = '';
    //     //         return nomeMes;
    //     // }
    // }

    // function zeroEsq(num){
    //     return num<=9?`0${num}`:num
    // }

    // function formataData(data){
    //     const diaSemana = data.getDay();
    //     const diaSemanaTxt = getWeekTxt(diaSemana);

    //     const numMes = data.getMonth();
    //     const nomeMes = nameMonth(numMes);

    //     return `${diaSemanaTxt}, ${zeroEsq(data.getDate())} de ${nomeMes} de ${data.getFullYear()}</br> ${zeroEsq(data.getHours())}:${zeroEsq(data.getMinutes())}`
    // }

    const h1 = document.querySelector('.container h1');
    const data = new Date();
    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle:'full',timeStyle:'short'})
};

meuEscopo();