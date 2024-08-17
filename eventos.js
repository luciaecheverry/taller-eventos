const div = document.getElementById("boton");

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

button.addEventListener("click", (event) => {
    alert("¡Hola!");
    event.stopPropagation(); // Evita que el clic en el botón dispare el evento del div
});