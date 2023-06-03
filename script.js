const pantalla = document.querySelector('canvas');
const  pincel = pantalla.getContext('2d');

pincel.fillStyle ='lightgrey';
pincel.fillRect(0,0,600,400);

function crearCirculo(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI)
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}
let x = 0;
let sentido = 1;
const radio = 10;

function crearObjetivo(x,y){
    crearCirculo(x, y, radio + 20, 'red');
    crearCirculo(x, y, radio + 10, 'white');
    crearCirculo(x, y, radio, 'red');
}

function SortearPosicion(limite){
    return Math.floor(Math.random()*limite)
}

function actualizarPantalla(){
    limpiarPantalla();
    xAleatorio = SortearPosicion(600);
    yAleatorio = SortearPosicion(400);
    crearObjetivo(xAleatorio , yAleatorio);
    x++;
}
setInterval(actualizarPantalla,1000);

function disparar(evento){
    const x = evento.pageX - pantalla.offsetLeft;
    const y = evento.pageY - pantalla.offsetTop;
    if(( x < xAleatorio + radio )&&
       ( x > xAleatorio - radio )&&
       ( y < yAleatorio + radio )&&
       ( y > yAleatorio - radio )){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Felicitaciones',
            showConfirmButton: false,
            timer: 1500
        })   
    }
}
pantalla.onclick = disparar;