function getDiaSemanaTexto(dia) {
    // forma prática
    // multiplas escolhas (dias da semana de acordo com .getDay())
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4:
            return 'Quarta';
        case 5:
            return 'Quinta';
        case 6:
            return 'Sexta';
        case 7:
            return 'Sábado';
        default:
            return '[ERRO]';
    }
}

const data = new Date();
const diaSemana = data.getDay() + 1;
const diaSemanaTxt = getDiaSemanaTexto(diaSemana);

// forma sem praticidade
// if(diaSemana === 1){
//     diaSemanaTxt = 'Domingo';
// } else if(diaSemana === 2){
//     diaSemanaTxt = 'Segunda';
// } else if(diaSemana === 3){
//     diaSemanaTxt = 'Terça';
// } else if(diaSemana === 4){
//     diaSemanaTxt = 'Quarta';
// } else if(diaSemana === 5){
//     diaSemanaTxt = 'Quinta';
// } else if(diaSemana === 6){
//     diaSemanaTxt = 'Sexta';
// } else if(diaSemana === 7){
//     diaSemanaTxt = 'Sábado';
// }


console.log(diaSemana, diaSemanaTxt);