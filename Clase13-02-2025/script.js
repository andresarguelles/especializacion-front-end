// function sumar(numero1, numero2) {
//     return numero1 + numero2;
// }

// function restar(numero1, numero2) {
//     return numero1 - numero2;
// }

// function multiplicar(numero1, numero2) {
//     return numero1 * numero2;
// }

// function dividir(numero1, numero2) {
//     if(numero2!==0){
//         return numero1/numero2;
//     }
//     return 'Sintax Error';
// }

// let numero1 = 7;
// let numero2 = 5;

// console.log(sumar(numero1,numero2));
// console.log(restar(numero1, numero2));
// console.log(multiplicar(numero1, numero2));
// console.log(dividir(numero1, numero2));

//Aplicacion de seguimiento de libros
let librosLeidos = [];

function agregarLibro(nombreDelLibro) {
    librosLeidos.push(nombreDelLibro);
}

function mostrarLibrosLeidos() {
    for(let i=0; i<librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    let libroNuevo = document.getElementById('libro-nuevo');
    agregarLibro(libroNuevo.value);
    libroNuevo.value = '';
})

let btnLibrosLeidos = document.getElementById('btn-libros-leidos');
btnLibrosLeidos.addEventListener("click", ()=> {
    let listaDeLibros = document.getElementById('libros-leidos');
    listaDeLibros.innerHTML = '<h2>Los libros que haz leido son</h2>'
    for(let i=0; i<librosLeidos.length; i++) {
        listaDeLibros.innerHTML += `<p>${librosLeidos[i]}</p>`;
    }
})




