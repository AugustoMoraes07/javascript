let num = [3,4,9,2,4,6,3,8] // UTILIZANDO VETOR OU VARIAVEL COMPOSTA
num[8] = 1 // ADICIONANDO VALOR POR POSIÇÃO ESPECÍFICA
num.push(2) // MÉTODO INTERNO PARA ADICIONAR VALORES NAS ÚLTIMAS POSIÇÕES
console.log(`[${num}]`) //MOSTRANDO TODOS OS VALORES DO VETOR
console.log(`Ele tem ${num.length} elementos`) // QUAL O COMPRIMENTO DO VETOR
num.sort()// ORGANIZANDO O VETOR EM ORDEM CRESCENTE
console.log(`Ele de forma organizada: ${num}`) //NUM.SORT()

/*CONTANDO OS NÚMEROS DO VETOR DE FORMA AUTOMÁTICA
for(let c = 0; c < num.length; c++){ 
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/
let pos = num.indexOf(1)
if(pos == -1){
    console.log('Não tem o valor 7 em nenhuma posição')
}else{
    console.log(`Foi encontrado o valor 7 na posição ${pos}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}