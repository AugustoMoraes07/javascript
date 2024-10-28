//PAR OU IMPAR COM FUNCTION E PARÂMETRO
function poui(n){ //PARÂMETRO
    //AÇÃO
    if(n%2==0){//PAR
        return 'Par!' //RETORNO
    } else{//ÍMPAR
        return 'Ímpar!' //RETORNO
    }
}
let res = poui(10) //CHAMADA E RESULTADO
console.log(`O número digitado é ${res}`)