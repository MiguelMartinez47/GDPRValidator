

let miImage = document.querySelector('img');
miImage.onclick = cambiarImagen;

// let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
let startButton = document.querySelector('startButton')



if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

function cambiarImagen(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/gdpr-6038525_960_720.png') {
      miImage.setAttribute('src','images/gdpr_lock_eu.jpg');
    } else {
      miImage.setAttribute('src', 'images/gdpr-6038525_960_720.png');
    }
}

// function estableceNombreUsuario() {
//     let miNombre = prompt('Por favor, ingresa tu nombre.');
//     localStorage.setItem('nombre', miNombre);
//     miTitulo.textContent = 'Mozilla es genial,' + miNombre;
//     alert("Hola, " + miNombre);
// }

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }