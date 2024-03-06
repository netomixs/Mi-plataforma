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
}
function Tema(id, nombre, descripcion) {
  this.Id = id;
  this.Nombre = nombre;
  this.Descripcion = descripcion;
  this.Recursos = [];
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
  materia.Image="https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/lenguajes-de-programacion.jpeg"

 
var tema = new Tema(
  1,
  "Diseño Algorítmico",
  "1.1 Conceptos básicos." +
    "1.2 Representación de algoritmos: gráfica y pseudocódigo. " +
    "1.3 Diseño de algoritmos. " +
    "1.4 Diseño de funciones. "
);
materia.Temas.push(tema);
var tema = new Tema(
  2,
  "Introducción a la Programación",
  "2.1 Conceptos básicos. " +
    "2.2 Características del lenguaje de programación." +
    "2.3 Estructura básica de un programa. " +
    "2.4 Elementos del lenguaje: tipos de datos, literales, constantes, variables, identificadores,parámetros, operadores y salida de datos." +
    "2.5 Traducción de un programa: compilación, enlace, ejecución y errores."
);
materia.Temas.push(tema);
var tema = new Tema(
  3,
  "Control de Flujo",
  "3.1 Estructuras secuenciales.\n " +
    "3.2 Estructuras selectivas: simple, doble y múltiple" +
    "3.3 Estructuras iterativas: repetir mientras, hasta, desde. "
);
materia.Temas.push(tema);
var tema = new Tema(
  4,
  "Organización de datos",
  "4.1 Arreglos" +
    "4.2 Unidimensionales: conceptos básicos, operaciones y aplicaciones. " +
    "4.3 Multidimensionales: conceptos básicos, operaciones y aplicaciones. " +
    "4.4 Estructuras o registros."
);
materia.Temas.push(tema);
var tema = new Tema(
  5,
  "Modularidad",
  "5.1 Declaración y uso de módulos. " +
    "5.2 Paso de parámetros o argumentos." +
    "5.3 Implementación. "
);
materia.Temas.push(tema);
materias.push(materia);
console.log(materias);
save("materias", materias);
