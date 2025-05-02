
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // Forma de tirar o carregamento da página (ruim)
    /*form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('TESTE')
       // document.body.innerHTML += '<p>Olá</p>'
    };*/

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();//Tirar função de recarregar página ao enviar 

        // Armazenando os dados
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');


        // Adicionar no array
        pessoas.push({nome:nome.value, 
            sobrenome:sobrenome.value, 
            altura:altura.value, 
            peso:peso.value})
        console.log(pessoas) 

        // Adicionar na div resultado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} Altura(cm):${altura.value} Peso(Kg):${peso.value}</p></br>`
        
    }

    form.addEventListener('submit', recebeEventoForm);//Tirar função de recarregar página ao enviar 
}

meuEscopo();








