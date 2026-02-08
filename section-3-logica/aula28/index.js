// const horas = 60*60*3*1000;
// const dia = 60*60*24*1000;
// const data = new Date(0+horas-dia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2026, 1, 7, 22, 0, 0); // a, m, d, h, m, s, ms
const data = new Date('2026-02-07T10:09:02');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // de 0-11 ou add data.getMonth() + 1
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay() + 1); // de 0-7 ou add data.getDay() + 1
console.log(data.toString());
console.log(Date.now());