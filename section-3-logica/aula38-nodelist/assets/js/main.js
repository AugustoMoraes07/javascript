const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


//Cor de fundo e cor do texto branco colocar no p 
for(let p of ps){
    p.style.backgroundColor = backgroundColorBody; 
    p.style.color = 'white';
    p.style.textShadow = '0px 0px 2px black';
}