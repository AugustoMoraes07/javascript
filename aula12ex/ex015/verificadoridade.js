function verificador(){ //FUNÇÃO PARA VERIFICAR A IDADE
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var sx = document.getElementsByName('sx')
    var txti = document.querySelector('div#txtimagem') 
    var idade = ano - Number(nasc.value)
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    //MSG [ERRO] CASO O ANO INSERIDO SEJA INVÁLIDO
    
    if(Number(nasc.value) < 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Dados Inválidos, tente novamente!')
    }else{

        
        //VERIFICAR O GÊNERO DA PESSOA
        var gênero = ''
        if(sx[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 13){
                //BEBE M
                img.setAttribute('src', './bebe-m.jpg')
            }else if(idade < 22){
                //JOVEM M
                img.setAttribute('src', './jovem-m.jpg')
            } else if(idade < 60){
                //ADULTO M
                img.setAttribute('src', './adulto-m.jpg')
            } else{
                //IDOSO M
                img.setAttribute('src', './idoso-m.jpg')
            }
        }else if(sx[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13){
                //BEBE F
                img.setAttribute('src', './bebe-f.jpg')
            }else if(idade < 22){
                //JOVEM F
                img.setAttribute('src', './jovem-f.jpg')
            } else if(idade < 60){
                //ADULTO F
                img.setAttribute('src', './adulto-f.jpg')
            } else{
                //IDOSO F
                img.setAttribute('src', './idoso-f.jpg')
            }
            }
    
    // QUANTOS ANOS A PESSOA TEM E SEU GÊNERO
    txti.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    txti.appendChild(img)
   }
}