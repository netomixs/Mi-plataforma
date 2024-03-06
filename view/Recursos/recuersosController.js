 
function load(key){
    var stringObjeto = JSON.parse(localStorage.getItem(key));
    return stringObjeto;
}
  var idTema=localStorage.getItem("temaActual");
  var idMateria=localStorage.getItem("materiaActual");
  var materias=load("materias")
  console.log(materias);
  var materia= materias.find(function (objeto) {
    return objeto.Id == idMateria;
  });

  var tema= materia.Temas.find(function (objeto) {
    return objeto.Id == idTema;
  });
  var recueros=tema.Recursos;
  var doc=document.getElementById("parrafor")
  doc.innerHTML=tema.Nombre