var vel = 60.5
var multa = 500
console.log(`Você está dirigindo a ${vel}Km/h`)
if (vel > 60){//Condição Simples
    console.log('Você ultrapassou a velocidade máxima. MULTADO!')
    console.log(`-${multa.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`)
}
console.log('Dirija sempre com o cinto de segurança!')