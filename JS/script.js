//DOMContentLoaded garante que o script seja executado depois que a página for completamente carregada.

// Captura o valor selecionado do select Lista de Cursos
const listaDeCursos = document.getElementById("lista-de-cursos");

if (listaDeCursos) {
  listaDeCursos.addEventListener("change", function () {
    const valorSelecionado = this.value;

    console.log("Opção selecionada:", valorSelecionado);

    const rows = document.querySelectorAll(".cursos tbody tr");

    rows.forEach(row => {
      if (valorSelecionado === "todos-os-cursos") {
        row.style.display = "";
      }

      else if (row.getAttribute("data-course-type") === valorSelecionado) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      };
    });
  });
};

// Funcionalidade do dropdown que fecha e depois abre o dropdown
function openDropdown(dropdownId) {
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");

  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    };
  };

  document.getElementById(dropdownId).classList.toggle("show");
}

// Funcionalidade para identificar se existe algum dropdown selecionado
// Caso exista algum dropdown selecionado, ele fecha todos os outros
window.onclick = function (event) {
  if (!event.target.matches(".btn-do-dropdown") && !event.target.matches(".fas")) {
    const dropdowns = document.getElementsByClassName("conteudo-dropdown");

    for (let openDropdown of dropdowns) {
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    };
  };
};

// Captura os valores de cada link dentro do dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".conteudo-dropdown");

  dropdowns.forEach(function (dropdown) {
    const links = dropdown.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        console.log(link.textContent);
      });
    });
  });
});

