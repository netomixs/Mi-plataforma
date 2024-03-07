const coloresFondo = [
  "#FF5733",
  "#C70039",
  "#900C3F",
  "#581845",
  "#18A0FB",
  "#008080",
  "#4CAF50",
  "#FFC107",
  "#FF5722",
  "#607D8B",
];

function load(key) {
  var stringObjeto = JSON.parse(localStorage.getItem(key));
  return stringObjeto;
}
//Carga el id de la materia seleccionada
var Idmateria = load("materiaActual");
var materias = [];
materias = load("materias");
var materia = materias.find(function (objeto) {
  return objeto.Id == Idmateria;
});
function cargarRecursos(id) {
  localStorage.setItem("temaActual", id);
  1;
  window.parent.postMessage(
    { key: "tema", data: "Recursos/RecursosView.Html" },
    "*"
  );
}
function agregarTarjetasIniciales() {
  var tarjetasContainer = document.getElementById("tarjetasContainer");
  materia.Temas.forEach((item, index) => {
    const colorFondoCabecera = item.Color;
    console.log(colorFondoCabecera);
    const temaTruncado = item.Nombre;
    const tareaTruncada = item.Descripcion;
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("col");
    nuevaTarjeta.innerHTML = `
        <div class="card tarjeta" >
            <div class="card-header" style="background-color: ${colorFondoCabecera}">
                <div >${temaTruncado}</div>
                <br>
            </div>
            <div class="contenedor-imagen-clase">
           
            </div>
            <div class="card-body">
                <p class="card-text">${tareaTruncada}</p>
            </div>
        </div>
    `;
    nuevaTarjeta.addEventListener("click", function () {
      cargarRecursos(item.Id);
      console.log("Tarjeta clickeada");
    });
    tarjetasContainer.appendChild(nuevaTarjeta);
  });
}

agregarTarjetasIniciales();
