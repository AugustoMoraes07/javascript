function meuEscopo(){
    const lista = document.querySelector('#lista');
    const addBtn = document.querySelector('#addItem');
    const rmvBtn = document.querySelector('#removeItem');
    const perifericos = []

    addBtn.addEventListener('click', function() {
        const equipNome = prompt('Digite o nome do periférico:');
        const equipValor = Number(prompt('Digite o valor do periférico:'));

        perifericos.push({
            periferico:equipNome,
            valor:equipValor
        })
        console.log(perifericos);
        addItemLista(equipNome, equipValor);
    })

    function addItemLista(nome,valor){
        lista.innerHTML += `<p><strong>Equipamento</strong>:${nome} <strong>Valor<strong>:${valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>`;
    }

    rmvBtn.addEventListener('click', function (){
        lista.innerHTML = '';
        perifericos.length = 0;
    })
}

meuEscopo();