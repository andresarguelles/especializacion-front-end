let frutero = [
    {
        fruta: 'manzana',
        cantidad: 2
    },
    {
        fruta: 'sandia',
        cantidad: 3
    },
    {
        fruta: 'melon',
        cantidad: 1
    },
    {
        fruta: 'kiwi',
        cantidad: 5
    },
    {
        fruta: 'platano',
        cantidad: 7
    }
];

let tarjeta = document.querySelector('.tarjeta');

//Mostramos la informacion en el html y aprovechemos para contar la fruta y mostrarla en el html

let totalDeFrutas = 0;
for(let i=0; i<frutero.length; i++){
    tarjeta.innerHTML += `<p>${frutero[i].fruta}: ${frutero[i].cantidad}</p>`
    totalDeFrutas += frutero[i].cantidad;
}

tarjeta.innerHTML += `<div><p> Total de frutas: ${totalDeFrutas} </p></div>`;



//Misma dinamica pero con el ciclo while y esta vez sin mostrarlo en el html
totalDeFrutas = 0;
let indice = 0;
while(indice<frutero.length) {
    totalDeFrutas += frutero[indice].cantidad;
    indice++;
}

console.log(totalDeFrutas);