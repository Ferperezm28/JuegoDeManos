//variables
let jugador =0;
let pc = 0;
//let jugadorImg = 0;
//let pcImg = 0;
let triunfos = 0;
let perdidas = 0;
//let imagenes = ["./assets/puno.png", "./assets/palma.png", "./assets/paz.png"];

//varaibles dom
let resultadoJugador = document.getElementById('jugador');
let resultadoPc = document.getElementById('cpu');
let mensaje = document.getElementById('partida');

let opcionPiedra = document.getElementById('opcion-piedra');
opcionPiedra.addEventListener('click', ataquePiedra);
let opcionPapel = document.getElementById('opcion-papel');
opcionPapel.addEventListener('click', ataquePapel);
let opcionTijera = document.getElementById('opcion-tijera');
opcionTijera.addEventListener('click', ataqueTijera);

//funcion aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function ataquePiedra() {
    jugador = 'piedra';

    console.log('piedra');
    ataquePc();
}
function ataquePapel() {
    jugador = 'papel';

    console.log('papel');
    ataquePc();
}
function ataqueTijera() {
    jugador = 'tijera';

    console.log('tijera');
    ataquePc();
}
function ataquePc() {
    let numero = aleatorio(1,3);
    if(numero == 1) {
        pc = 'piedra';

    }else if ( numero == 2) {
        pc = 'papel';

    } else {
        pc = 'tijera'

    }
    console.log(pc);
    combate();
}
function combate() {
    imagenJugador();
    imagenPc();
    //console.log(jugadorImg, numero)
    
    if(pc == jugador){
        //alert("EMPATE")
        crearMensajes('EMPATE 🤨');
    }
    //escenarios donde ganas
    else if(jugador == 'piedra' && pc == 'tijera'){
       // alert("GANASTE");
        crearMensajes('GANASTE 🤩');
        triunfos = triunfos +1; //sumar
    }
    else if(jugador == 'papel' && pc == 'piedra'){
        //alert("GANASTE")
        crearMensajes('GANASTE 🤩');
        triunfos = triunfos +1; 
    }
    else if(jugador == 'tijera' && pc == 'papel'){
        //alert("GANASTE")
        crearMensajes('GANASTE 🤩');
        triunfos = triunfos +1; 
    }
    //escenarios donde pierdes
    else{
        //alert("PERDISTE")
        crearMensajes('PERDISTE 😭');
        perdidas = perdidas +1; //la computadora gana
    }    
}
function imagenJugador() {
    if(jugador == 'piedra') {
        resultadoJugador.src = './assets/puno.png';
    } else if(jugador == 'papel') {
        resultadoJugador.src = './assets/palma.png';
    } else if(jugador == 'tijera'){
        resultadoJugador.src = './assets/paz.png';
    }
}
function imagenPc() {
 //console.log(pc);
    if (pc == 'piedra') {
        resultadoPc.src = './assets/puno.png';
    } else if(pc == 'papel') {
        resultadoPc.src = './assets/palma.png';
    } else if(pc == 'tijera') {
        resultadoPc.src = './assets/paz.png';
    }
}
    
    

function crearMensajes(resultado){
    mensaje.innerHTML = resultado;
}

