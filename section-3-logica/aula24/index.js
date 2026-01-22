/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 24 - Boa noite
+25 - [ERRO] Hora inválida!
*/


// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if
// Eu posso ter vários else if na estrutura condicional
// Só posso ter um else na estrutura condicional

const hora = 60;

if (hora <= 11){
    console.log('Bom dia');
} else if (hora <= 18){
    console.log('Boa tarde');
} else if (hora <= 24){
    console.log('Boa noite');
} else {
    console.log('[ERRO] Hora inválida!');
}

