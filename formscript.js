

function preguntarCantidad(){
    let cinco = prompt("Cuantos personajes de 5 estrellas posees?");
    let cuatro = prompt("Cuantos personajes de 4 estrellas posees?");
   
    if(cinco >=0 && cinco <=21 && cuatro >=0 && cuatro <=22)
    {
        let calculo1 = 0;
        calculo1 = Number(21) - Number(cinco);
        document.getElementById("cinco").innerHTML = "Tienes " + cinco + " personajes de cinco Estrellas y te faltan " + calculo1 + ".";
        let calculo2 = Number(22) - Number(cuatro);
        document.getElementById("cuatro").innerHTML = "Tienes " + cuatro + " personajes de cuatro Estrellas y te faltan " + calculo2 + ".";
    }
    
    }
    
    
 
