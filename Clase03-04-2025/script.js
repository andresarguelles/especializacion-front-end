function contar(desde, hasta, unidadDeConteo) {
    if(desde>hasta){
        return;
    }
    console.log(desde);
    contar(desde + unidadDeConteo, hasta, unidadDeConteo);
}

contar(1, 5, 1);

function factorial(numero) {
    if(numero === 1){
        return 1;
    }

    return numero * factorial(numero - 1);
    
}

let resultado = factorial(3);
console.log(resultado);