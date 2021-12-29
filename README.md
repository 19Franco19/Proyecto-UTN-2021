# Proyecto-UTN-2021

Las secciones que desarrolle son "Principal", "Arcontes" y "Contacto" de la botonera de la pagina.



-En la sección principal utilice la libreria Lightbox con JQuery de JavaScript para mediante un click sobre la imagen al lado del texto, poder visualizar las dos imagenes que se encuentran en esa imagen mediante la galeria creada con Lightbox

-En la sección arcontes, utilice el DOM para recorrer un array que contiene todos las etiquetas <a> y así cambiar el color de texto de cada elemento <a> al color azul. Además seleccione dos elementos de ese array y los modifique puntualmente a cada uno, los dos elementos que tome son "Historia", que le cambie el color a verde, y "habilidades" que le cambie el color a gris.

Tambien cree dos funciones para esta pagina, la funcion "preguntarPersonaje" que le hace dos preguntas al usuario mediante  un boton y las respuestas las imprime en pantalla.  Este proceso apenas se carga la pagina se encuentra oculto, y para acceder a este boton que invoca la funcion "preguntarPersonaje" se debe hacer click en cualquier de las 3 imagenes de la pagina, esto invocara la funcion "mostrarComentario" y nos mostrara el elemento oculto que nos va a permitir usar el boton.


-En la sección contacto valide el formulario haciendo 3 funciones, la funcion "validarDatos" que escucha los eventos que se producen al ingresar datos en los imputs de usuario y correo y ejecuta las funciones "validarUsuario" y  "validarCorreo" para poder validar el formulario apenas carga la pagina.

Estas dos ultimas funciones trabajan de la misma manera, con estructuras condicionales se verifica que los campos no esten vacios, en el caso de estar vacios se cambia el color de fondo del campo a rojo y si se trata de enviar el formulario mostrara el mensaje correspondiente para el campo que hay que llenar, y una vez que el campo se llena de manera valida el fondo del campo cambia a color verde y permite enviarlo y recarga la pagina nuevamente. 
