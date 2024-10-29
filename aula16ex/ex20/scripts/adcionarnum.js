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
