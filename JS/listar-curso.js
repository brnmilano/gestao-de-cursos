function openDropdown(dropdownId) {
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");

  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    }
  }
  document.getElementById(dropdownId).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".btn-do-dropdown") && !event.target.matches(".fas")) {
    const dropdowns = document.getElementsByClassName("conteudo-dropdown");

    for (let openDropdown of dropdowns) {
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

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

const listaDeCursos = document.getElementById("lista-de-cursos");

if (listaDeCursos) {
  listaDeCursos.addEventListener("change", function () {
    const valorSelecionado = this.value;
    console.log("Opção selecionada:", valorSelecionado);

    const rows = document.querySelectorAll(".gestao-de-cursos-tabela-campus tbody tr");

    rows.forEach(row => {
      if (valorSelecionado === "todos-os-niveis") {
        row.style.display = "";
      }
      else if (row.getAttribute("data-nivel") === valorSelecionado) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}



