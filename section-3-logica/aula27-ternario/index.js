// (condicao) ? 'Valor para true' : 'Valor para false'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP':'Usuário Padrão';
console.log(nivelUsuario)

const corUsuario = '';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao)

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário padrão.');
// }