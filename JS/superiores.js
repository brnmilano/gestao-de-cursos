document.addEventListener("DOMContentLoaded", function () {
  const inputBuscarCurso = document.getElementById("input-buscar-curso");
  const rows = document.querySelectorAll(".tabela-superiores-de-tecnologia .tr");

  inputBuscarCurso.addEventListener("input", function () {
    const searchTerm = inputBuscarCurso.value.toLowerCase();

    rows.forEach(row => {
      const courseName = row.querySelector(".lista-de-cursos-nome-do-curso").textContent.toLowerCase();
      if (courseName.includes(searchTerm)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectCategoria = document.getElementById("select-lista-de-cursos");
  const rows = document.querySelectorAll(".tabela-superiores-de-tecnologia .tr");

  selectCategoria.addEventListener("change", function () {
    const selectedCategoria = selectCategoria.value.toLowerCase();

    rows.forEach(row => {
      const courseCategory = row.querySelector(".lista-de-cursos-nome-do-curso").textContent.toLowerCase();
      if (selectedCategoria === "todos-os-niveis" || courseCategory.includes(selectedCategoria)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const checkboxEaD = document.getElementById("apenas-cursos-a-distancia");
  const checkboxInscricoesAbertas = document.getElementById("apenas-inscricoes-abertas");

  checkboxEaD.addEventListener("change", function () {
    console.log("Apenas Cursos a Distância (EaD):", checkboxEaD.checked ? "Marcado" : "Desmarcado");
  });

  checkboxInscricoesAbertas.addEventListener("change", function () {
    console.log("Apenas Cursos com Inscrições Abertas:", checkboxInscricoesAbertas.checked ? "Marcado" : "Desmarcado");
  });
});
