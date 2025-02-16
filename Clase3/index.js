let calificacion = parseInt(prompt("Ingresa tu calificación: "));

if(calificacion >= 60 && calificacion <= 100){
    if(calificacion >= 90){
        console.log("Excelente");
    }else if(calificacion >= 75){
        console.log("Bien");
    }
    else{
        console.log("Suficiente");
    }
}else{
    console.log("Insuficiente");
}