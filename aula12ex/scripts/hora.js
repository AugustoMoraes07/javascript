function carregar(){
var dia = new Date()
var hora  = dia.getHours()
var min = dia.getMinutes()
var txth = document.getElementById('txth')
var imgh = document.getElementById('imgh')

// ADICINANDO 0 antes da hora e minuto
if(hora < 10 && min < 10){
    txth.innerHTML = `<p>Agora são 0${hora}:0${min}</p>`
} else if(hora < 10){
    txth.innerHTML = `<p>Agora são 0${hora}:${min}</p>`
} else if(min < 10){
    txth.innerHTML = `<p>Agora são ${hora}:0${min}</p>`
} else {
    txth.innerHTML = `<p>Agora são ${hora}:${min}</p>`
}

// Background BODY and IMGH
if (hora < 12){
    //MANHA
    imgh.style.backgroundImage = 'url(image/manhaoriginal.jpg)'
    document.body.style.backgroundColor = '#af8f61'
} else if (hora <=18){
   // TARDE
    imgh.style.backgroundImage = 'url(image/tardeoriginal.jpg)'
    document.body.style.backgroundColor = '#82281c'
} else if (hora > 18){
   // NOITE
    imgh.style.backgroundImage = 'url(image/noiteoriginal.jpg)'
    document.body.style.backgroundColor = '#3e4855'
}
}