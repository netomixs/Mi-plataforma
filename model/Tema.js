function Tema(id, nombre, descripcion) {
  this.Id = id;
  this.Nombre = nombre;
  this.Descripcion = descripcion;
  this.Recursos = [];
  this.agregarRecurso = function (nuevoRecuerso) {
    this.Recursos.push(nuevoRecuerso);
  };
}
