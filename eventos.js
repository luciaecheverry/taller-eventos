const div = document.getElementById("boton");

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

function func1(event) {
    alert("DIV 1");
    if (document.getElementById("boton").checked) {
      event.stopPropagation();
    }
  }