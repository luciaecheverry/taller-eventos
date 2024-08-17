const div = document.getElementById("boton");
const boton =  document.getElementById("botonSaludar");

// Manejador del evento click para el div
div.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

// Manejador del evento click para el botón
botonSaludar.addEventListener("click", (event) => {
    alert("¡Hola!");
    event.stopPropagation(); // Evita que el clic en el botón dispare el evento del div
});