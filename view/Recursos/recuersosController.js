function load(key) {
  var stringObjeto = JSON.parse(localStorage.getItem(key));
  return stringObjeto;
}
var idTema = localStorage.getItem("temaActual");
var idMateria = localStorage.getItem("materiaActual");
var materias = load("materias");

var materia = materias.find(function (objeto) {
  return objeto.Id == idMateria;
});

var tema = materia.Temas.find(function (objeto) {
  return objeto.Id == idTema;
});
var titulo_Doc = document.getElementById("texto-titulo");
titulo_Doc.textContent = "Tema " + tema.Id;
titulo_Doc.style.color = tema.Color;
var linea=document.getElementById("linea-titulo")
linea.style.color= tema.Color;
linea.style.backgroundColor= tema.Color;
var recueros = tema.Recursos;
function cargarRecurso(id) {
  var documento = document.getElementById("frame");
  documento.setAttribute("src", tema.Recursos[id - 1].Enlace);
  if (tema.Recursos[id - 1].Tipo == "pdf") {
    documento.classList.remove("frame");
    documento.classList.add("pdf");
  } else {
    documento.classList.remove("pdf");
    documento.classList.add("frame");
  }
}

function createCard(recurso) {
  var card = document.createElement("div");
  card.className = "card";

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);
  card.addEventListener("click", function () {
    limpiar();
    // card.className="card seleccion"
    cardBody.classList.add("seleccion");
    cargarRecurso(recurso.Id);
  });
  if (recurso.Id == 1) {
    cardBody.classList.add("seleccion");
    cargarRecurso(recurso.Id);
  }
  var row = document.createElement("div");
  row.className = "row";
  cardBody.appendChild(row);

  var col4 = document.createElement("div");
  col4.className = "col-5  ";
  row.appendChild(col4);

  var img = document.createElement("img");
  img.className = "imagen-minuatua";
  if (recurso.Tipo == "pdf") {
    img.src = "/img/pdf.jpg";
  }
  if (recurso.Tipo == "video") {
    img.src = "/img/youtube.jpg";
  }
  if (recurso.Tipo == "presentacion") {
    img.src = "/img/power_Point.png";
  }
  if (recurso.Tipo == "genial") {
    img.src = "/img/genail.jpg";
  }

  col4.appendChild(img);

  var col8 = document.createElement("div");
  col8.className = "col-7";

  var h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = recurso.Titulo;
  col8.appendChild(h5);
  var p = document.createElement("p");
  p.textContent = recurso.Descripcion;
  col8.appendChild(p);

  row.appendChild(col8);

  return card;
}
var listaElement = document.getElementById("lista");
tema.Recursos.forEach((recurso) => {
  listaElement.appendChild(createCard(recurso));
});
function limpiar() {
  const elementos = document.querySelectorAll(".seleccion");
  elementos.forEach((elemento) => {
    elemento.classList.remove("seleccion");
  });
}

cargarRecurso(tema.Recursos[0].Id);
