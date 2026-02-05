// condicao ? true : false
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000? 'Usuário VIP':'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = nivelUsuario === 'Usuário VIP'? null:'Branco';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);


// if (pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// } else{
//     console.log('Usuário normal');
// }