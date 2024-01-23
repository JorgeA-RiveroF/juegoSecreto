/* Codigo JavaScript de Juego Numero Secreto del curso de Logica de Programación en Alura Oracle Next Education */
//Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = []; 
let numeroMaximo = 10;
//console.log(numeroSecreto);

//Función para asignar texto en la pagina HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para verificar si el número ingresado es mayor, menor o el número secreto 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); 
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Función para limpiar la caja de intentos
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//Función que genera el numero secreto de forma aleatoria y evita que se repita con el del anterior juego
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;   
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteado == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearonn todos los numeros posibles');
    } else {


        //Si el numero generado esta incluido  en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();    
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Función para asignar las condiciones iniciales de un nuevo juego
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Función para reiniciar el juego
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo
    // generar numero aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de numeor de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();