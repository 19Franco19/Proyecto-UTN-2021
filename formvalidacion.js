let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');

function validarDatos() {
    nombre.addEventListener('input', validarNombre);
    correo.addEventListener('input', validarCorreo);
    validarNombre();
    validarCorreo();
}

function validarNombre() {
    if(nombre.value == ''){
        nombre.setCustomValidity('Ingrese su nombre de pila.');
        nombre.style.backgroundColor = '#ff8080';
    } else {
        nombre.setCustomValidity('');
        nombre.style.backgroundColor = '#adebad';
    }    
 }
    function validarCorreo() {
    if(correo.value == '' ){
        correo.setCustomValidity('Ingrese un correo electronico valido por favor.');
        correo.style.backgroundColor = '#ff8080';
    }else {
        correo.setCustomValidity('');
        correo.style.backgroundColor = '#adebad';
    }
}

window.addEventListener('load', validarDatos, false);
