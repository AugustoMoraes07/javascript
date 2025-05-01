
const pessoa = {
    nome:'Augusto',
    sobrenome:'Felipe',
    idade:17,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando que sua idade é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++
    }
}

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()


// Fazendo função que retorna dados em objetos
/*function criaPessoa (nome, sobrenome, idade)// Recebendo no parâmetro
{
    return {nome, sobrenome, idade};
}



const pessoa1 = criaPessoa('Augusto','Moraes',17); // Passando Argumento
const pessoa2 = criaPessoa('Julia','Miranda',18); // Passando Argumento
const pessoa3 = criaPessoa('João','Oliveira',19); // Passando Argumento

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)*/