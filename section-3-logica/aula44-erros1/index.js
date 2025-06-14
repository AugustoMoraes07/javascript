// try {
//     console.log(naoExisto);
// } catch(err){
//     console.log('naoExisto não existe');
//     // Jamais exiba esse erro para o usuario, coloque isso base de dados
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // functions constructions
        throw new Error('x e y precisam ser números.');
    }

    return x+y;
}

try{
    console.log(soma(1,2));
    console.log(soma('a',2));
} catch(error){
    // console.log(error);
    console.log('Algo amigável, como tente novamente para o usúario.')
}
