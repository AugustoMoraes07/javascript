// quero falas em sequência desde  o  cumprimento, até o tudo bem ?

function falandoBomDia(callback){
    console.log('Bom dia!');
    if(callback) callback();
}

function callbackCumprimento(callback){
    console.log('Como você está?');
    if(callback) callback();
}

function callbackDesenvolver(){
    console.log('Tá fazendo oque de bom ?');
}


falandoBomDia(() => callbackCumprimento(callbackDesenvolver));