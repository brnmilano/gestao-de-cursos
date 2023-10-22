document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-criar-forma-de-ingresso");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeFormaValue = form.querySelector("[name='nome-forma']").value;
    const descricaoValue = form.querySelector("[name='descricao']").value;

    console.log("Nome da Forma:", nomeFormaValue);
    console.log("Descrição:", descricaoValue);
  });
});
