function aaa() {
  console.log(ventana);
}
function load(key) {
  var stringObjeto = JSON.parse(localStorage.getItem(key));
  return stringObjeto;
}
var materias = load("materias");
console.log(materias);
 
function cargarMateria(id) {
  localStorage.setItem("materiaActual", id);
  window.parent.postMessage({ key: 'materia', data: 'Temas/temasView.Html' }, '*');
  console.log("Hola")
}
function truncarTexto(texto, longitudMaxima) {
  if (texto.length > longitudMaxima) {
      return texto.substring(0, longitudMaxima) + '...';
  } else {
      return texto;
  }
}
function agregarTarjetasIniciales() {
  var tarjetasContainer = document.getElementById("tarjetasContainer");
  console.log(tarjetasContainer);
  const temasYtareas = [
      { tema: "Diseño Algorítmico", tarea: "Tarea 1" },
      { tema: "Introducción a la Programación", tarea: "Tarea 2" },
      { tema: "Control de Flujo", tarea: "Tarea 3" },
      { tema: "Organización de datos", tarea: "Tarea 4" },
      { tema: "Modularidad", tarea: "Tarea 5" },
      { tema: "Tema 6", tarea: "Tarea 6" }
  ]; 

  const coloresFondo = ["#FF5733", "#C70039", "#900C3F", "#581845", "#18A0FB", "#008080", "#4CAF50", "#FFC107", "#FF5722", "#607D8B"];

  materias.forEach((item, index) => {
      const colorFondoCabecera = coloresFondo[index % coloresFondo.length];
      const temaTruncado =  item.Nombre;
      const tareaTruncada = item.Descripcion

      const nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.classList.add("col");
      nuevaTarjeta.innerHTML = `
          <div class="card tarjeta" >
              <div class="card-header" style="background-color: ${colorFondoCabecera}">
                  
                  <p>${temaTruncado}</p>
                  <br>
              
              </div>
              <div class="contenedor-imagen-clase">
              <img src="${item.Image}" class="image-class" >
              </div>
       
              <div class="card-body">
                  <p class="card-text">${tareaTruncada}</p>
              </div>
          </div>
      `;
      nuevaTarjeta.addEventListener("click", function() {
        cargarMateria(item.Id);
        console.log("Tarjeta clickeada");
    });
      tarjetasContainer.appendChild(nuevaTarjeta);
  });
}

agregarTarjetasIniciales();


