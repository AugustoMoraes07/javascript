
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado')
    const pessoas = [];

    // Forma mais prática e nova de puxar o evento e dar alguma ação
    form.addEventListener('submit', function(evento){
        // Evitando Envio
        evento.preventDefault();

        // Armazenando Dados
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        // Adicionando pessoas no array e informando no console
        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        console.log(pessoas);
    })

    // Criando novos objects de pessoas e mostrando na tela
    function criaPessoa(nome,sobrenome,peso,altura){
        resultado.innerHTML += `<p>${nome} ${sobrenome}` + ` ${peso}kg ${altura}(M)</p>`;

        return {nome, sobrenome, peso, altura};
    }
    
}

meuEscopo();