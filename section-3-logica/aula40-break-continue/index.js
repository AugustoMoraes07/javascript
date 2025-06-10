const numeros = [1,2,3,4,5,6,7,8,9];

// Continue continua para a próxima ação
// Break para a ação no mesmo momento/parando o laço

for (let i in numeros){
    let numero = numeros[i]

    if (numero === 2 || numero === 5){
        console.log(`Pulando o número ${numero}...`);
        continue;
    }
    
    console.log(numero);

    if (numero === 7){
        console.log('O número 7 foi encontrado, saindo...')
        break;
    }
}