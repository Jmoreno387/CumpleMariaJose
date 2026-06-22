
const inicio = document.getElementById("inicio");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const galeria = document.getElementById("galeria");
const final = document.getElementById("final");

const btnComenzar = document.getElementById("btnComenzar");
const sobreAnimado = document.getElementById("sobreAnimado");

const continuarFotos = document.getElementById("continuarFotos");
const irFinalCarta = document.getElementById("irFinalCarta");

const volverCarta = document.getElementById("volverCarta");
const btnFinal = document.getElementById("btnFinal");

const textoCarta = document.getElementById("textoCarta");

const fotoActual = document.getElementById("fotoActual");

const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

/* ===========================
   CAMBIAR PANTALLAS
=========================== */

function mostrar(pantalla){

    document.querySelectorAll(".pantalla").forEach(p=>{

        p.classList.remove("activa");

    });

    pantalla.classList.add("activa");

}

/* ===========================
   INICIO
=========================== */

btnComenzar.addEventListener("click",()=>{

    mostrar(sobre);

});

/* ===========================
   SOBRE
=========================== */

sobreAnimado.addEventListener("click",()=>{

    document.querySelector(".tapa").style.transform="rotateX(180deg)";

    setTimeout(()=>{

        mostrar(carta);

        escribirCarta();

    },900);

});

/* ===========================
   CARTA
=========================== */


const mensaje = `
Mi querida María José ❤️

Este no es un año más.

Hoy celebro el día en que nació mi persona favorita.

Gracias por llegar a mi vida.

Gracias por hacerme sentir querido.

Gracias por cada risa.

Gracias por cada abrazo.

Gracias por cada aventura.

En estos siete meses me has regalado recuerdos que voy a guardar siempre.

Y si algún día la vida me preguntara a quién volvería a elegir...

mi respuesta seguiría siendo exactamente la misma.

Te elegiría una.

Dos.

Mil veces.

Porque eres mi cabito.

Feliz cumpleaños.

Con todo mi amor.

Del niño que siempre te elegirá. 🐧❤️
`;


let escribiendo=false;

function escribirCarta(){

    if(escribiendo)return;

    escribiendo=true;

    let i=0;

    textoCarta.innerHTML="";

    function escribir(){

        if(i<mensaje.length){

            textoCarta.innerHTML+=mensaje.charAt(i);

            i++;

            setTimeout(escribir,28);

        }

    }

    escribir();

}

continuarFotos.addEventListener("click",()=>{

    mostrar(galeria);

});

irFinalCarta.addEventListener("click",()=>{

    mostrar(final);

});

/* ===========================
   GALERÍA
=========================== */

const fotos=[

    "assets/foto1.jpg",

    "assets/foto2.jpg",

    "assets/foto3.jpg",

    "assets/foto4.jpg",

    "assets/foto5.jpg",

    "assets/foto6.jpg",

    "assets/foto7.jpg"

];

let indice=0;

function actualizarFoto(){

    fotoActual.src=fotos[indice];

}

btnSiguiente.addEventListener("click",()=>{

    indice++;

    if(indice>=fotos.length){

        indice=0;

    }

    actualizarFoto();

});

btnAnterior.addEventListener("click",()=>{

    indice--;

    if(indice<0){

        indice=fotos.length-1;

    }

    actualizarFoto();

});

volverCarta.addEventListener("click",()=>{

    mostrar(carta);

});

btnFinal.addEventListener("click",()=>{

    mostrar(final);

});

/* ===========================
   CAMBIO AUTOMÁTICO
=========================== */

setInterval(()=>{

    if(galeria.classList.contains("activa")){

        indice++;

        if(indice>=fotos.length){

            indice=0;

        }

        actualizarFoto();

    }

},4500);

