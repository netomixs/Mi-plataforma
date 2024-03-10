function crearElemento(tarea,tema) {
  var texto = ` <div class="accordion" id="accordion-${tarea.Id}-${tema}">
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse-${tarea.Id}-${tema}" aria-expanded="true" aria-controls="#collapse-${tarea.Id}-${tema}" >
            <h4>${tarea.Titulo}</h4>
        </button>
    </h2>
    <div id="collapse-${tarea.Id}-${tema}"  class="accordion-collapse collapse " data-bs-parent="accordion-${tarea.Id}-${tema}">
        <div class="accordion-body">
        <strong>${tarea.Subtitulo}</strong>
            <p>${tarea.Descripcion}</p>
     
            <div class="  columna-2 columna" id="iframe-contenedor">
            <iframe class="frame" src="${tarea.Enlace}" id="frame" ></iframe>
       
        </div>
      
        </div>
    </div>
</div>
</div>`;
/*
       <a type="button"href="${tarea.Enlace}" class="btn btn-link" id="link" target="_blank">
                Comenzar
            </a>
*/
  var element = document.createElement("div");
  element.innerHTML = texto;
  return element;
}
var temas = [];
function Tarea(id, titulo, subtitulo, descripcion, enlace) {
  this.Id = id;
  this.Titulo = titulo;
  this.Subtitulo = subtitulo;
  this.Descripcion = descripcion;
  this.Enlace = enlace;
}
function TemasTareas(id, color) {
  this.Id = id;
  this.Color = color;
  this.Tareas = [];
  this.agregarTarea = function (nuevoRecuerso) {
    this.Tareas.push(nuevoRecuerso);
  };
}
var Categoria = new TemasTareas(1, "#33496D");
var tarea = new Tarea(
  1,
  "Cuestionario: Diseño de algoritmos.",
  "Descripción de la actividad.",
  "En este cuestionario, explorarás conceptos esenciales de programación a través de preguntas básicas sobre el diseño de algoritmos. Demuestra tu conocimiento sobre símbolos, instrucciones y procesos clave en el desarrollo de software.",
  "https://es.educaplay.com/recursos-educativos/18163252-tema_1_cuestionario.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  2,
  "Diagramas de Flujo.",
  "Descripción de la actividad.",
  "En esta actividad, conectarás conceptos con sus descripciones para consolidar tu comprensión. A medida que emparejas términos clave con sus explicaciones, mejorarás tus habilidades en la creación y interpretación de diagramas de flujo.",
  "https://es.educaplay.com/recursos-educativos/18163141-tema_1_diagramas_de_flujo.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  3,
  "Sopa de letras: Conceptos Básicos.",
  "Descripción de la actividad.",
  "Sumérgete en la diversidad del universo informático. Encontrarás una mezcla de términos esenciales en el mundo de la programación.",
  "https://es.educaplay.com/recursos-educativos/18163105-tema_1_conceptos_basicos.html"
);
Categoria.Tareas.push(tarea);
temas.push(Categoria);
var Categoria = new TemasTareas(2, "#C17A50");
var tarea = new Tarea(
  1,
  "Sopa de letras: Introducción a la Programación.",
  "Descripción de la actividad.",
  "Sumérgete en un divertido desafío de búsqueda de palabras. Encuentra términos relacionados con los conceptos básicos de programación y refuerza tu comprensión mientras encuentras las palabras ocultas en la cuadrícula.",
  "https://es.educaplay.com/recursos-educativos/18163205-programacion_2_1_2_5.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  2,
  "Crucigrama: Programación.",
  "Descripción de la actividad.",
  "Desafía tus conocimientos mientras encuentras y completas palabras clave relacionadas con el mundo de la programación. Este crucigrama te invita a explorar y consolidar tus fundamentos en programación.",
  "https://es.educaplay.com/recursos-educativos/18163246-crucigrama_de_programacion.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  3,
  "Ordenar palabras.",
  "Descripción de la actividad.",
  "En esta actividad, tu desafío será organizar oraciones relacionadas con la programación. Pon a prueba tu conocimiento formando oraciones coherentes sobre conceptos fundamentales de programación.",
  "https://es.educaplay.com/recursos-educativos/18163283-desafio_de_programacion.html"
);
Categoria.Tareas.push(tarea);
temas.push(Categoria);
var Categoria = new TemasTareas(3, "#FF366D");
var tarea = new Tarea(
  1,
  "Memorama: Estructuras Selectivas.",
  "Descripción de la actividad.",
  "Ejercita tu memoria mientras coincides pares de tarjetas que contienen conceptos relacionados con decisiones y ramificaciones en la programación",
  "https://es.educaplay.com/recursos-educativos/18163269-estructuras_selectivas.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  2,
  "Sopa de letras: Estructuras Secuenciales.",
  "Descripción de la actividad.",
  "Aadéntrate en un desafío de búsqueda de palabras. Encuentra términos clave relacionados con la programación secuencial. Refuerza tus conocimientos mientras buscas y conectas estas palabras en la cuadrícula.",
  "https://es.educaplay.com/recursos-educativos/18163356-estructuras_secuenciales.html"
);
Categoria.Tareas.push(tarea);
var tarea = new Tarea(
  3,
  "Crucigrama: Estructuras Iterativas",
  "Descripción de la actividad.",
  "Explora y refuerza tus conocimientos sobre conceptos clave relacionados con bucles y repeticiones en programación. Encuentra los términos esenciales que juegan un papel crucial en la ejecución repetida de instrucciones.",
  "https://es.educaplay.com/recursos-educativos/18163466-estructuras_iterativas.html"
);
Categoria.Tareas.push(tarea);
temas.push(Categoria);
console.log(temas);
crearTema(temas);
function crearTema(temas) {
  temas.forEach((item, index) => {
    var contenedor = document.createElement("div");
    contenedor.className = "container-fluid contenedor-tema";
    var tituloComtenedor = document.createElement("div");
    tituloComtenedor.className = "titulo-bibliografia";
    var titulo = document.createElement("h1");
    titulo.style.color = item.Color;
    titulo.textContent = "Tema " + item.Id;
    tituloComtenedor.appendChild(titulo);
    var linea2 = document.createElement("hr");
    tituloComtenedor. appendChild(linea2);
    contenedor.appendChild(tituloComtenedor);

    item.Tareas.forEach((tarea) => {
      var element = crearElemento(tarea,item.Id);

      contenedor.appendChild(element);
      console.log(contenedor);
    });
    var cuerpo = document.getElementById("contenedor-grande");
    console.log(cuerpo);
    cuerpo.appendChild(contenedor);
  });
}
