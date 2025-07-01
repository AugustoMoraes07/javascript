let task = document.querySelector('.new-task');
const btnTask = document.querySelector('.add-task')
const list = document.querySelector('.list');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

task.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!task.value) return;
        criaTarefa(task.value);
    }
}); 

function limpaInput() {
    task.value = '';
    task.focus();
}

function criaBtnDelet(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText += textoInput;
    list.appendChild(li);
    limpaInput();
    criaBtnDelet(li);
    salvarTarefas();
}


btnTask.addEventListener('click', function (e) {
    // ERRO CASO NÃO TENHA NENHUM VALOR
    if (!task.value) return;
    criaTarefa(task.value);

})


document.addEventListener('click', function (e) {
    //REMOVENDO TAREFAS
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = list.querySelectorAll('li');
    const listaDeTarefas = [];

    // TIRANDO BOTÃO DE APAGAR E ADD TEXTO NO ARRAY
    for (let task of liTarefas) {
        let tarefaTexto = task.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    // ARMAZENANDO EM STRING JSON LISTA DE TAREFAS
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// PEGANDO DE VOLTA AS TAREFAS QUE FORAM ARMAZENADAS NO LOCALSTORAGE
function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();



