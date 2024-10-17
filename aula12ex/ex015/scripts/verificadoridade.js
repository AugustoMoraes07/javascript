function verificador(){
    var nasc = document.getElementById('nasc')
    var sx = document.getElementsByName('sx')
    var txti = document.querySelector('div#txtimagem') 
    var i = document.querySelector('div#imagem')
    var idade = 2024 - Number(nasc.value)
    txti.innerHTML = `Você tem ${idade} anos !`
}