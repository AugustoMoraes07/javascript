const num = Number(prompt('Digite um número:'));
const numTitle = document.getElementById('numero-titulo');
const divText = document.getElementById('texto');

numTitle.innerText = num;

divText.innerHTML = `<p>Raiz quadrada: ${num**1/2}</p>`;
divText.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
divText.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
divText.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
divText.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
divText.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}</p>`;