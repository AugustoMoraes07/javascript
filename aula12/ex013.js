var dia = new Date()
var diaSem = dia.getDay()
/*

0 Domingo
1 Segunda 
2 Terça
3 Quarta
4 Quinta
5 Sexta 
6 Sábado
*/
switch (diaSem){
    case 0:
        console.log('Bom Domingo')
        break
    case 1:
        console.log('Boa Segunda-Feira')
        break
    case 2:
        console.log('Boa Terça-Feira')
        break
    case 3:
        console.log('Boa Quarta-Feira')
        break
    case 4:
        console.log('Boa Quinta-Feira')
        break
    case 5:
        console.log('Boa Sexta-Feira')
        break    
    case 6:
        console.log('Bom Sábado')
        break
    default:
        console.log('[ERRO] Dia da semana inválido')   
        break 
}