function verdadeiraMetrica(a,p){

    const maiorAltura = 3;
    const menorAltura = 0.546;
    const maiorPeso = 635;
    const menorPeso = 2;
    
    
    
    
    if (a > maiorAltura) {
        return false;
    } else if (a < menorAltura) {
        return false;
    } else if (p > maiorPeso) {
        return false;
    } else if (p < menorPeso) {
        return false;
    } else {
        return true;
    }
}

console.log(verdadeiraMetrica(0, 0));