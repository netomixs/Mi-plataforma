function Materia(nombre, descripcion) {
  this.Nombre = nombre;
  this.Descripcion = descripcion;
  this.Temas = [];
  this.Image="";
  this.agregarTema = function (nuevoTema) {
    this.Temas.push(nuevoTema);
  };


}
