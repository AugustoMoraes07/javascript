var agora = new Date
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora.toFixed(2).replace('.',':')} horas.`)
if (hora > 23 || hora < 5){
    console.log('Madrugada (VAI DORMIR SEU VAGABUNDO)')
} else if( hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('Boa tarde!')
    } else if (hora <= 23){
    console.log('Boa noite!')}