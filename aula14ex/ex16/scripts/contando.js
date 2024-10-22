function contar(){
    var i = document.getElementById('i')
    var f = document.getElementById('f')
    var s = document.getElementById('s')
    var res = document.getElementById('res')
    
    res.innerHTML = '<p>Contando:</p><br>'
    if (i.value.length == 0 || f.value.length == 0 || s.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam Dados')
    }else {
        res.innerHTML = ''
        var i = Number(i.value)
        var f = Number(f.value)
        var s = Number(s.value)
        if(s <= 0){
            window.alert(`Esse salto é invalído. Considerando salto em 1`)
            s = 1
        }
        
        if(i < f ){
            for(i ; i <= f ; i+=s){
                res.innerHTML += ` ${i} \u{1F449}`
        }   
        }else if (i > f){
            for(i ; i >= f ; i-=s){
                res.innerHTML += ` ${i} \u{1F449}`
        }}
        res.innerHTML += `\u{1F3F4}`
    }
}