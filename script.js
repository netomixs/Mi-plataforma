var ventana = 1;
var ruta = "/view/";
var ventanaSrc = "Materias/materiasView.html";
var isReturn;
cambiarVentana(1);

function cargarVentana() {
  var documento = document.getElementById("main-screen");
  documento.setAttribute("src", ruta + ventanaSrc);
  console.log(ruta);
}
function cambiarVentana(index) {
  limpiarOpciones();
  ventana = index;
  switch (ventana) {
    case 1:
      var elemento = document.getElementById("inicio-item");
      elemento.classList.add("active");
      ventanaSrc = "Materias/materiasView.html";
      break;
    case 2:
      var elemento = document.getElementById("tareas-item");
      elemento.classList.add("active");
      ventanaSrc = "Tareas/tareasView.html";
      break;
    case 3:
      var elemento = document.getElementById("integrantes-item");
      elemento.classList.add("active");
      ventanaSrc = "Integrantes/index.html";
      break;
    case 4:
      var elemento = document.getElementById("bibliografia-item");
      elemento.classList.add("active");
      ventanaSrc = "Bibliografia/bibliografiaView.html";
      break;
    case 5:
      var elemento = document.getElementById("contacto-item");
      elemento.classList.add("active");
      ventanaSrc = "Contacto/contactoView.html";
      break;
    case 6:
      var elemento = document.getElementById("acerca-item");
      elemento.classList.add("active");
      ventanaSrc = "Acerca/acercaStyleView.html";

      break;
  }
  cargarVentana();
}
/**
 * Marca a todas las ventada
 */ function limpiar() {
  const elementos = document.querySelectorAll(".active");
  elementos.forEach((elemento) => {
    elemento.classList.remove("active");
  });
}
function limpiarOpciones() {
  limpiar();
}
window.onmessage = function (e) {
  if (e.data.key == "materia") {
    ventanaSrc = e.data.data;
  }
  if (e.data.key == "tema") {
    ventanaSrc = e.data.data;
  }
  cargarVentana();
  console.log();
};
