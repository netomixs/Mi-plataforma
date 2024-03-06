var ventana = 1;
/*
 * Funcion que se usa para cambiar la ventana actual
 * @param {*} index 
 */
function cambiarVentana(index) {
    limpiarOpciones();
  ventana = index;
  switch (ventana) {
    case 1:
      var elemento = document.getElementById("inicio-item");
      elemento.classList.add("active");
      break;
    case 2:
      var elemento = document.getElementById("tareas-item");
      elemento.classList.add("active");
      break;
    case 3:
      var elemento = document.getElementById("contacto-item");
      elemento.classList.add("active");
      break;
    case 4:
      var elemento = document.getElementById("acerca-item");
      elemento.classList.add("active");
      break;
  }
}
/**
 * Marca a todas las ventada
 */
function limpiarOpciones() {
  var elemento = document.getElementById("inicio-item");
  elemento.classList.remove("active");
  elemento = document.getElementById("tareas-item");
  elemento.classList.remove("active");
  elemento = document.getElementById("contacto-item");
  elemento.classList.remove("active");
  elemento = document.getElementById("acerca-item");
  elemento.classList.remove("active");
}
