/*
Curto-circuito 
&& -> false && true -> false "é valor mesmo"
|| -> true || false -> retorna "o valor verdadeiro"

FALSY
false
0
'' "" ``
undefined / null
NaN
*/

const a = 0;
const b = null;
const c = '';
const d = false;
const e = 'Augusto';

console.log(a || b || c || d || e);