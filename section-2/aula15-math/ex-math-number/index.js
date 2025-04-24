const num = Number(prompt('Digite um valor:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerText = num;

texto.innerHTML = ''
texto.innerHTML = `<p>A raiz quadrada desse número é: ${num ** 0.5}</p>`;// raiz quadrada
texto.innerHTML += `<p>Ele é inteiro: ${Number.isInteger(num)}</p>`;// se é integer
texto.innerHTML += `<p>Esse número é inválido: ${Number.isNaN(num)}</p>`;// se é inválido
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`// arredondado para baixo
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`// arredondado para cima
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`// com duas casa decimais