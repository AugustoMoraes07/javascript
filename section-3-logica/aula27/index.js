// condicao ? true : false
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000? 'Usuário VIP':'Usuário Normal';
console.log(nivelUsuario);

// operador ternário que define uma cor de acordo com o nível
const corUsuario = nivelUsuario === 'Usuário VIP'? null:'Branco';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

// estrutura condicional de acordo com a pontuacao feita
// if (pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// } else{
//     console.log('Usuário normal');
// }