function tabuada(){
    var num = document.getElementById('n')
    var ta = document.getElementById('ta')
    var divtab = document.getElementById('tabuada')
    var seltab = document.getElementById('seltab')
    var opc = document.createElement('option')
    
    
    if(num.value.length == 0){ //CONDIÇÃO CASO NÃO TENHA NÚMERO DIGITADO
        window.alert('[ERRO] Digite um número')
    }else{ //TABUADA
        var n = Number(num.value)//CONVERTENDO PARA NÚMERO

        seltab.innerHTML = `` //CALCULO
        for(let m1_10 = 1;m1_10 <= 10; m1_10++){
            let item = document.createElement('option') //CRIANDO ELEMENTO OPTION
            item.text = `${n}X${m1_10}=${n*m1_10}` //ADICIONANDO TABUADA NO OPTION
            item.value = `tab${m1_10}`//COLOCANDO VALUE NOS OPTIONS
            seltab.appendChild(item) //COLOCANDO O OPTION PARA APARECER
        }
}}