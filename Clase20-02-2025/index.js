const formulario = document.getElementById('formulario');
const usuarios = [
    {
        user: 'miguel',
        pass: '1234'
    },
    {
        user: 'zaira',
        pass: '12345'
    },
    {
        user: 'angel',
        pass: '123456'
    },
    {
        user: 'julio',
        pass: '1234567'
    }
]

function validar(username, password){
    for(let i =0; i<usuarios.length; i++){
        if(username === usuarios[i].user && password == usuarios[i].pass){
            return true;    
        }
    }
    return false;
}

function mostrarError(tipo){
    let span = document.getElementById('error');
    span.innerHTML = tipo;
    span.classList.remove('hide');
    setTimeout(()=>{
        span.classList.add('hide');
    }, 5000)
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let usuario = document.getElementById('inputUsuario').value;
    let password = document.getElementById('inputPassword').value;
    mostrarError('hola mundo')
})

