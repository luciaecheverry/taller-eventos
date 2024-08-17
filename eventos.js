const div = document.getElementById("boton");
const botonSaludar =  document.getElementById("botonSaludar");


div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

botonSaludar.addEventListener("click", function(event){
    alert("¡Hola!");
    event.stopPropagation(); // Evita que el botón dispare el evento del div
});
