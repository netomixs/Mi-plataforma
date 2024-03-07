function Materia(id, nombre, descripcion) {
  this.Id = id;
  this.Nombre = nombre;
  this.Descripcion = descripcion;
  this.Temas = [];
  this.agregarTema = function (nuevoTema) {
    this.Temas.push(nuevoTema);
  };
}
function Recurso(id, titulo, descripcion, tipo, enlace) {
  this.Id = id;
  this.Titulo = titulo;
  this.Descripcion = descripcion;
  this.Tipo = tipo;
  this.Enlace = enlace;
  this.Completado=false;
}
function Tema(id, nombre, descripcion,color) {
  this.Id = id;
  this.Nombre = nombre;
  this.Descripcion = descripcion;
  this.Recursos = [];
  this.Color = color;
  this.agregarRecurso = function (nuevoRecuerso) {
    this.Recursos.push(nuevoRecuerso);
  };
}
function save(key, objeto) {
  var miObjetoComoJSON = JSON.stringify(objeto);
  localStorage.setItem(key, miObjetoComoJSON);
}
function load(key) {
  var stringObjeto = JSON.stringify(localStorage.getItem(key));
  return stringObjeto;
}
var materias = [];
var materia = new Materia(1, "Fundamentos de Programación", "");
materia.Descripcion =
  "Esta asignatura aporta al perfil del egresado, la capacidad para desarrollar un pensamiento lógico a través del diseño de aloritmos utilizando herramientas de programación para el desarrollo de aplicaciones computacionales que resuelvan problemas reales.";
materia.Image =
  "https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/lenguajes-de-programacion.jpeg";
/**Tema 1 */
var Categoria = new Tema(
  1,
  "Diseño Algorítmico",
  "1.1 Conceptos básicos." +
    "1.2 Representación de algoritmos: gráfica y pseudocódigo. " +
    "1.3 Diseño de algoritmos. " +
    "1.4 Diseño de funciones. ",
    "#33496D"
);
var recurso = new Recurso(
  1,
  "Introducción a diseño algorítmicos",
  "Video de introduccion",
  "video",
  "https://www.youtube.com/embed/a-0VLxbo1hM?si=QIhoPt4tRE8sjbfY"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  2,
  "Infografia del tema 1",
  "Infografia ",
  "pdf",
  "/assets/docs/infografia_tema_1.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  3,
  "Presentacion del tema 1",
  "Mas información de diseño algoritmico",
  "presentacion",
  "/assets/docs/Tema1.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  4,
  "Mapa mental del tema 1",
  "Mapa mental qu resume el tema 1",
  "genial",
  "https://view.genial.ly/65e877f43c8de40014099e09/interactive-content-mapa-mental-semicircular "
);
Categoria.Recursos.push(recurso);
materia.Temas.push(Categoria);
/**Tema 2 */
var Categoria = new Tema(
  2,
  "Introducción a la Programación",
  "2.1 Conceptos básicos. " +
    "2.2 Características del lenguaje de programación." +
    "2.3 Estructura básica de un programa. " +
    "2.4 Elementos del lenguaje: tipos de datos, literales, constantes, variables, identificadores,parámetros, operadores y salida de datos." +
    "2.5 Traducción de un programa: compilación, enlace, ejecución y errores.",
    "#C17A50"
);
var recurso = new Recurso(
  1,
  "Video de introducción a la Programación",
  "Video que explica un poco sobre lo que es la programación",
  "video",
  "https://www.youtube.com/embed/p9XoWLx70Zc?si=wwS7n3sG-AI7cb-8"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  2,
  "Mapa metal del tema 2",
  "Un pequeño mapa mental que resume el tema 2 de introducción a la programación",
  "pdf",
  "/assets/docs/Mapa_Tema_2.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  3,
  "Presentación del tema 2",
  "Presentación con mas información del tema 2  introducción a la Programación",
  "presentacion",
  "/assets/docs/Tema_2.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  4,
  "Infografía del tema 2",
  "Infografia que resume el tema 2",
  "genial",
  "https://view.genial.ly/65e877f43c8de40014099e09/interactive-content-mapa-mental-semicircular"
);
Categoria.Recursos.push(recurso);
materia.Temas.push(Categoria);
/**Tema 3 */
var Categoria = new Tema(
  3,
  "Control de Flujo",
  "3.1 Estructuras secuenciales.\n " +
    "3.2 Estructuras selectivas: simple, doble y múltiple" +
    "3.3 Estructuras iterativas: repetir mientras, hasta, desde. ",
    "#FF366D"
);
var recurso = new Recurso(
  1,
  "Control de Flujo",
  "Video que explica sobre el tema control de flujo",
  "video",
  "https://www.youtube.com/embed/YReFQ-M0ZXg?si=yxwEpPMT99M7eo9z"
);
Categoria.Recursos.push(recurso);

var recurso = new Recurso(
  2,
  "Estructuras de secuencia",
  "La estructura de secuencia en programación se refiere al orden de ejecución de instrucciones de forma secuencial, una después de otra. Es el orden básico de ejecución en los lenguajes de programación y es la base para escribir algoritmos.",
  "presentacion",
  "/assets/docs/Tema_3_Estructura_Secuencial.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  3,
  "Estructuras selectivas",
  "La estructura selectiva se basa en evaluaciones condicionales, donde se establece una condición y, según si esta es verdadera o falsa, el programa realiza acciones específicas.",
  "presentacion",
  "/assets/docs/Tema_3_Estructuras_Selectivas.pdf"
);
Categoria.Recursos.push(recurso);

var recurso = new Recurso(
  4,
  "Estructuras iterativas",
  "La estructura iterativa, también conocida como iteración, se define como una secuencia de pasos e instrucciones con un propósito: poder ejecutarse repetidamente.",
  "presentacion",
  "/assets/docs/Tema_3_Estructura_Iteratura.pdf"
);
Categoria.Recursos.push(recurso);
materia.Temas.push(Categoria);
var Categoria = new Tema(
  4,
  "Organización de datos",
  "4.1 Arreglos" +
    "4.2 Unidimensionales: conceptos básicos, operaciones y aplicaciones. " +
    "4.3 Multidimensionales: conceptos básicos, operaciones y aplicaciones. " +
    "4.4 Estructuras o registros.",
    "#8A5DF6"
);
var recurso = new Recurso(
  1,
  "Organización de datos",
  "Video sobre la organización de datos en la programación",
  "video",
  "https://www.youtube.com/embed/jx3i7vMajdw?si=O6hwCWcF1mYfTrgu"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  2,
  "Arreglos",
  "Un arreglo es una colección ordenada de elementos del mismo tipo. Cada elemento del arreglo se identifica por un índice, que indica su posición en la secuencia.",
  "presentacion",
  "/assets/docs/Tema_4_Arreglos"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  3,
  "Arreglos multidimencionales",
  "Los arreglos multidimensionales son una extensión de las matrices de dos dimensiones y se utilizan para almacenar elementos en más de una dimensión. Esto facilita la representación de estructuras de datos más complejas. ",
  "presentacion",
  "/assets/docs/Tema_4_Multidimensionales.pdf"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  4,
  "Estructuras o registros",
  "En programación, un registro es una agrupación de datos, llamados campos, que no necesariamente son del mismo tipo",
  "pdf",
  "/assets/docs/Tema_4_Infografía.pdf"
);
Categoria.Recursos.push(recurso);
 
materia.Temas.push(Categoria);
var Categoria = new Tema(
  5,
  "Modularidad",
  "5.1 Declaración y uso de módulos. " +
    "5.2 Paso de parámetros o argumentos." +
    "5.3 Implementación. ",
    "#F15DF6"
);
var recurso = new Recurso(
  1,
  "Modularidad",
  "Video de Modularidad",
  "video",
  "https://www.youtube.com/embed/RqkmtLkdFbo?si=PKZg8t2IoiWA2E2l"
);
Categoria.Recursos.push(recurso);
var recurso = new Recurso(
  2,
  "Modularidad presentacion",
  "Presentacion sobre el tema de Modularidad",
  "genial",
  "https://view.genial.ly/65e889f0a586e50014112a9d/presentation-tema-5"
);
Categoria.Recursos.push(recurso);
materia.Temas.push(Categoria);
materias.push(materia);
console.log(materias);
save("materias", materias);
 