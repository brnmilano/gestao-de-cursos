//Evento que pega o valor do select após escolher o valor e apertar no botão "salvar"
document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("trocar-tipo-curso");
  const saveButton = document.getElementById("salvar-troca");

  saveButton.addEventListener("click", function () {
    console.log(selectElement.value);
  });
});
