// const umDia = 60*60*24*1000;
// const data = new Date(0 + umDia) 01/01/1970 Timestamp unix ou epóca unix

// const data = new Date(2026, 0, 1, 00, 00, 00); // a, m, d, h, m, s, ms>

/*const data = new Date('2025-05-18 12:14:39')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('MilSeg', data.getMilliseconds())
console.log('Dia da semana', data.getDay())*/
// console.log(Date.now()) Data convertida em miliseconds


function zeroEsq(num){
    return num<=9 ? `0${num}`: num;
}

function formataData(data){
    const dia = zeroEsq(data.getDate());
    const mes = zeroEsq(data.getMonth());
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const min = zeroEsq(data.getMinutes());
    const seg = zeroEsq(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil =  formataData(data);
console.log(dataBrasil)