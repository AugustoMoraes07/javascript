// try{
//     // Tenta fazer algo
//     // console.log(a);
//     console.log('Abri o arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try{
//         console.log(b);
//     }catch(e){
//         console.log('Deu erro');
//     }finally{
//         console.log('Também sou finally');
//     }
// } catch(e){
//     // Executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre executado
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('10-11-2007 09:00:34')
    const hora = retornaHora(data);
    console.log(hora);
} catch(e){
    //Tratar erro
    // console.log(e);
} finally{
    console.log('Tenha um ótimo dia');
}

