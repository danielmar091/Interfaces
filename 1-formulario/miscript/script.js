/*console.log("Hola mundo! 😂");
console.warn("ayuda porfavor");
console.error("error");

//Version ES6 

// var hola = 'Hola'; //variable antigua

let quetal = 'Que\'s tal'; //variable 
const comoEstas = 'Mal';

guardarDatos()

function guardarDatos(x, y, z){
    // escribir muerte
    console.log(x);
    console.log(quetal);
   console.log(z);

   return x;
}

console.log(document.getElementsByTagName('h1'));
// recoge todos los tag dentro del parentesis, crea un array y te lo muestra

document.getElementById();
// recoge el id exacto dentro del parentesis y crea un array
document.querySelector();

document.querySelectorAll();
// recoge todos los elementos
*/

    /*
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("name");
let apellido = document.getElementById("surname");
let sexoHombre = document.getElementById("sexo_hombre");
let sexoMujer = document.getElementById("sexo_mujer");
let sexoIvan = document.getElementById("sexo_ivan");
let nick = document.getElementById("nick");
let email = document.getElementById("email");
let mensaje = document.getElementById("message");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");


console.log(formulario);
console.log(nombre);
console.log(apellido);
console.log(sexoHombre);
console.log(sexoMujer);
console.log(sexoIvan);
console.log(nick);
console.log(email);
console.log(mensaje);
console.log(submit);
console.log(reset);
*/

// Seleccionar el formulario
    
    const form = document.getElementById('contactForm');
    const body = document.getElementById('body');
    const data = document.getElementById('datos');


    // Agregar un listener para el evento de envío
    form.addEventListener('submit', function(event) {
        event.preventDefault();


        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var sex = document.querySelector('input[name="sex"]:checked').value;
        var email = document.getElementById('email').value;
        var nick = document.getElementById('nick').value;
        var comment = document.getElementById('comment').value;


        form.classList.add('active')


        data.innerHTML = `Nombre: ${name} <br>
                          Apellidos: ${surname} <br>
                          Sexo: ${sex} <br>
                          Email: ${email} <br>
                          Nick: ${nick} <br>
                          Comentario: ${comment} <br>
                          <strong>Gracias por enviar tus datos a Israel</strong>`;
    });
