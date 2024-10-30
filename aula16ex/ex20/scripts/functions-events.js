/* chatgpt

function adicionar(){
    var num = document.getElementById('num')
    var addnum = document.getElementById('addnum')
    
    //Verificar se foi digitado algo e se é um número válido
    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número')
    }else{
        var numse = Number(num.value)
        var add = false

        //VERIFICADOR TRUE == Ele já existe
        for(let c = 0;c < addnum.options.length; c++){
            if (Number(addnum.options[c].value) === numse){
                add = true
                break
            }
        }

        
        //ADICINAR NÚMERO
     if (!add){
        var opt = document.createElement('option')
        opt.text = `O número ${numse} foi adicionado` 
        opt.value = numse
        addnum.appendChild(opt) 
    } else{
        window.alert('[[ERRO] O número já foi adicionado, digite outro')
    }
}} */

/*
//Vídeo Guanabara
//ELEMENTOS EM VARIÁRVEIS
let num = document.getElementById('num')
let lista = document.getElementById('addnum')
let res = document.getElementById('res')
let valores = []

function isNumber(n){ //VERIFICANDO SE ELE ESTÁ ENTRE 1 A 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n,l){ //TESTANDO SE O NÚMERO JÁ EXISTE
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if (isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `O número ${num.value} foi adicionado`
        lista.appendChild(opt)
    }else{
        window.alert('[ERRO] Número inválido ou já encontrado na lista') //ERRO
    }

}

//COLOCANDO QUANTOS ELEMENTOS TEM
function analisar(){
    if(valores.length == 0){
        window.alert('[ERRO]Antes de finalizar, adicione números')
    }else{
    res.innerHTML = `Foram adicionados ${valores.length} valores.<br>` //.length
        
    var numaior = Math.max(...valores)
    res.innerHTML += `O maior valor foi ${numaior}.<br>`

    var numenor = Math.min(...valores)
    res.innerHTML += `O menor valor foi ${numenor}`
    }
}
*/

//Fazendo ex20 no help

//ATRIBIUR DADOS
var num = document.getElementById('num')
var lista = document.getElementById('selnum')
var res = document.getElementById('res')
var valores = []

//IDENTIFICAR SE O NÚMERO É VALIDO
function isNumero(n){
    if(n>= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

//IDENTIFICAR SE O NÚMERO JÁ ESTÁ NA LISTA
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


//ADICIONAR NÚMERO
function adicionar(){ 
    //CONDIÇÃO + CONUJUNÇÃO DE DUAS FUNÇÕES
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `O número ${num.value} foi adicionado`
        lista.appendChild(opt)
        res.innerHTML = ''
    } else{ 
            window.alert('[ERRO] Não foi possivel identificar um número ou já está na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    res.innerHTML = ''
     

    if(valores.length == 0){
        window.alert('[ERRO] Adicione um valor, antes de finalizar')
    }else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){
       soma += valores[pos]
       if(valores[pos] > maior)
        maior = valores[pos]
       if(valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML += `<p>Foram adicionados ${tot} números</p>`
    res.innerHTML += `<p>O maior número é ${maior}</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>Somando todos os números, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos números é ${media.toFixed(3)} </p>`


}

}