function criarContador(){
    let contador = 0;
    return function(){
        contador++;
        return contador;
    }
}

const contar = criarContador();
console.log(contar());
console.log(contar());
console.log(contar());