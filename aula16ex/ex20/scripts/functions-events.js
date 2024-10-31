
var num = document.getElementById('num')
var lista = document.getElementById('selnum')
var res = document.getElementById('res')
var valores = []

function isNumber(n){
    if(n >= 1 && n <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('[ERRO] Número inválido ou está na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('[ERRO] Adicione um número para finalizar.')
    } else{
        res.innerHTML = ''

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
         media = soma/tot
        res.innerHTML += `<p>Foram adicionados ${tot} valores.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>` 
        res.innerHTML += `<p>A soma de todos os valores é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}</p>`

    }
}