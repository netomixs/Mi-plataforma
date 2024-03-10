function validar() {
  limpiar();
  var campos = 0;
  var correoSelect = document.getElementById("idDestinatario");

  var selectedOption = correoSelect.options[correoSelect.selectedIndex];
  if (selectedOption.value != "0") {
    correoSelect.classList.add("is-valid");
    campos++;
  } else {
    correoSelect.classList.add("is-invalid");
  }
  var remitente = document.getElementById("idRemitente");
  if (remitente.value != "") {
    remitente.classList.add("is-valid");
    campos++;
  } else {
    remitente.classList.add("is-invalid");
  }
  var asunto = document.getElementById("idAsunto");
  if (asunto.value != "") {
    asunto.classList.add("is-valid");
    campos++;
  } else {
    asunto.classList.add("is-invalid");
  }
  var cuerpo = document.getElementById("idCuerpo");
  if (cuerpo.value != "") {
    cuerpo.classList.add("is-valid");
    campos++;
  } else {
    cuerpo.classList.add("is-invalid");
  }
  if (campos == 4) {
    var mailtoURL =
      "mailto:" +
      selectedOption.value +
      "?subject=" +
      encodeURIComponent(asunto.value) +
      "&body=" +
      encodeURIComponent(cuerpo.value + "\n Enviado por: " + remitente.value);
    window.location.href = mailtoURL;
  }
}
function limpiar() {
  var elementos = document.querySelectorAll(".is-valid");
  elementos.forEach((elemento) => {
    elemento.classList.remove("is-valid");
  });
  elementos = document.querySelectorAll(".is-invalid");
  elementos.forEach((elemento) => {
    elemento.classList.remove("is-invalid");
  });
}
