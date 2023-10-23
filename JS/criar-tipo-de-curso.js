// Funcionalidade Criar tipo de Curso
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-criar-campus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tipoDeCursoValue = form.querySelector("[name='tipo-de-curso']").value;
    const descricaoValue = form.querySelector("[name='descricao']").value;

    console.log("Tipo de Curso:", tipoDeCursoValue);
    console.log("Descrição:", descricaoValue);
  });
});
