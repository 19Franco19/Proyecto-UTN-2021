function mostrarComentario(){
    var cajaComentario = document.getElementById('comentario')
    cajaComentario.style.display = 'block'
}



function preguntarPersonaje(){
    let texto1 = prompt("Cual de los 3 Arcontes te llama la atencion, Venti,Zhongli o Raiden?");
    let texto2 = prompt("Porque te llama más la atención?");
    document.getElementById("gusto").innerHTML = "El personaje que te llamo la atencion fue: " + texto1;
    document.getElementById("razones").innerHTML = "Las razones por las que te gustaron fueron:  " + texto2;
}